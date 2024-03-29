import { useState, useRef, useEffect, forwardRef } from "react";
import styles from "./NowPlaying.module.scss";
import classNames from "classnames/bind";
import InfoAudio from "../../../Card/InfoAudio/InfoAudio";
import Button from "../../../Button/Button";
import MuiAlert from "@mui/material/Alert";
import PlayingList from "../PlayingList/PlayingList";
import Detail from "../PlayingDetails/Detail";
import NavigationBottom from "../../../NavigationBottom/NavigationBottom";
import { Slider, Snackbar } from "@mui/material";

import Buttonn from "../../../Buttonn/Button";
//
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const cx = classNames.bind(styles);

function NowPlaying({ tracks }) {
  const audioPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [audioIdx, setAudioIdx] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [volumeAudio, setVolumeAudio] = useState(0.5);
  const [volumeVal, setVolumeVal] = useState(1);
  const [sibarRight, setSibarRight] = useState(false);
  const [openClass, setOpenClass] = useState(false);
  const [lyricSong, setLyricSong] = useState("");
  const [openMess, setOpenMess] = useState(false);
  const widthRef = useRef();
  let classBar = sibarRight ? "show" : "";
  let responeNav = openClass ? "isShow" : "";
  //handle play
  const handlePlay = (e) => {
    if (isPlay === false && seekValue === 100) {
      //when pause at max time => next audio
      if (audioIdx < tracks.length - 1) {
        setAudioIdx(audioIdx + 1);
      } else {
        setAudioIdx(0);
      }
      setIsPlay(true);
      return;
    }
    audioPlayer.current.play();
    setIsPlay(true);
  };
  //pause
  const handlePause = (e) => {
    audioPlayer.current.pause();
    setIsPlay(false);
  };
  //next
  const handleNext = (e) => {
    if (audioIdx < tracks.length - 1) {
      setAudioIdx(audioIdx + 1);
      setLyricSong("");
    } else {
      setAudioIdx(0);
      setLyricSong("");
    }
    handlePlay();
  };

  //prev
  const handlePrev = (e) => {
    if (audioIdx - 1 < 0) {
      setAudioIdx(tracks.length - 1);
      setLyricSong("");
    } else {
      setAudioIdx(audioIdx - 1);
      setLyricSong("");
    }
    handlePlay();
  };
  //handle volume
  const handleMuteOn = (e) => {
    if (volumeAudio > 0) {
      setVolumeVal(audioPlayer.current?.volume);
      setVolumeAudio(0);
      audioPlayer.current.volume = 0;
    } else {
      audioPlayer.current.volume = volumeVal;
      setVolumeAudio(audioPlayer.current.volume);
    }
  };
  //alert
  const handleClickMess = () => {
    setOpenMess(!openMess);
  };

  useEffect(() => {
    if (!isPlay) {
      return;
    } else {
      audioPlayer.current.play();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioIdx, tracks]);

  useEffect(() => {
    if (seekValue === 100 && isPlay) {
      //when audio max time and play = true => auto next
      setTimeout(() => {
        if (audioIdx < tracks.length - 1) {
          setAudioIdx(audioIdx + 1);
        } else {
          setAudioIdx(0);
        }
      }, 1500);
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seekValue]);

  function convertSeconds(sec) {
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    if (isNaN(m) || isNaN(s)) {
      m = 0;
      s = 0;
    }
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }

  const checkNaN = (val) => {
    if (isNaN(val)) {
      return 0;
    }
    return val;
  };

  const onPlaying = () => {
    setCurrentTime(convertSeconds(audioPlayer.current.currentTime));
    setSeekValue(
      (audioPlayer.current.currentTime /
        checkNaN(audioPlayer.current.duration)) *
        100
    );
  };

  const onLoad = () => {
    setTimeout(() => {
      setCurrentTime(convertSeconds(audioPlayer.current?.currentTime));
    }, 1000);
  };

  const handleChangeVolume = (val) => {
    setVolumeAudio(val);
    audioPlayer.current.volume = val;
  };

  const handleProgress = (event, value) => {
    let compute = (value * audioPlayer.current.duration) / 100;
    audioPlayer.current.currentTime = compute;
  };

  const handleChooseTrack = (idx, isPause = false) => {
    if (isPause) {
      handlePause();
    } else {
      setAudioIdx(idx);
      handlePlay();
    }
  };

  const readText = (filePath, callBack) => {
    if (filePath && filePath !== null) {
      fetch(filePath)
        .then((response) => response.text())
        .then((data) => {
          let output = data.split("\n");
          let dataLrc = output.map((text, index) => [
            {
              time: text.replace(/(^.*\[|\].*$)/g, ""),
              lyric: text.replace(/ *\[[^\]]*]/, "").trim(),
            },
          ]);
          setLyricSong(dataLrc);
        });
    } else {
      setLyricSong("");
    }
  };

  return (
    <div className={cx("now-playing-bar")}>
      <Snackbar
        open={openMess}
        autoHideDuration={4000}
        onClose={handleClickMess}
      >
        <Alert
          onClose={handleClickMess}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Chưa cập nhật lời bài hát!
        </Alert>
      </Snackbar>
      <div className={cx("cnk-list-playing") + " " + cx(classBar)}>
        <PlayingList
          listTrack={tracks}
          onPlaying={audioIdx}
          onPlay={handleChooseTrack}
          isPlay={isPlay}
        />
      </div>
      <Detail
        listTrack={tracks}
        onPlay={handleChooseTrack}
        isPlay={isPlay}
        song={tracks[audioIdx].title}
        img={tracks[audioIdx].img}
        code={tracks[audioIdx].code}
        artist={tracks[audioIdx].artists_names}
        isOpen={openClass}
        onClick={() => setOpenClass(false)}
        isPlaying={isPlay && "border"}
        onPlaying={audioIdx}
        lyrics={lyricSong}
        currentTime={currentTime}
        onClickEvent={(e) => {
          if (tracks[audioIdx].lyric && tracks[audioIdx].lyric != null) {
            readText(tracks[audioIdx].lyric);
          } else {
            handleClickMess();
            setLyricSong("");
          }
        }}
      />

      <div className={cx("player-controls") + " " + cx("clickable")}>
        <div
          className={
            cx("level") +
            " " +
            cx("player-controls-container") +
            " " +
            cx(responeNav)
          }
        >
          <div className={cx("player-controls-left") + " " + cx(responeNav)}  onClick={() => setOpenClass(!openClass)}>
            <div className={cx("level-item-left") + " " + cx("is-narrow")}>
              <InfoAudio
                isPlay={isPlay}
                song={tracks[audioIdx].title}
                img={tracks[audioIdx].img}
                artist={tracks[audioIdx].artists_names}
              />
            </div>
          </div>

          <div className={cx("player-controls-center")}>
            <div className={cx("level-item")}>
              <div className={cx("action")}>
                <Buttonn
                  icon={ShuffleOutlinedIcon}
                  tooltip={"Tắt phát ngẫu nhiên"}
                  customIcon={"is20"}
                  show={openClass ? "" : "isShow"}
                />
                <Buttonn
                  disabled={audioIdx === 0 ? true : false}
                  icon={SkipPreviousIcon}
                  onClick={handlePrev}
                  customIcon={"is20"}
                />
                <Buttonn
                  icon={!isPlay ? PlayArrowIcon : PauseIcon}
                  onClick={!isPlay ? handlePlay : handlePause}
                  customIcon={"is25"}
                  className={"border"}
                />
                <Buttonn
                  icon={SkipNextIcon}
                  customIcon={"is20"}
                  onClick={handleNext}
                />
                <Buttonn
                  icon={RepeatIcon}
                  customIcon={"is20"}
                  tooltip={"Phát lại tất cả"}
                  show={openClass ? "" : "isShow"}
                />
              </div>
              <audio
                src={tracks[audioIdx].audioSrc}
                ref={audioPlayer}
                onTimeUpdate={onPlaying}
                onLoadedMetadata={onLoad}
              >
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
            <div
              className={
                cx("level-item") + " " + cx("time-bar") + " " + cx(responeNav)
              }
            >
              <span className={cx("time-left")}>
                {currentTime === 0 ? "00:00" : currentTime}
              </span>
              <div className={cx("cnk-duration-bar")} ref={widthRef}>
                <Slider
                  className={cx("playback-completed")}
                  value={seekValue || 0}
                  onChange={handleProgress}
                  size={"small"}
                />
              </div>
              <span className={cx("time-right")}>
                {convertSeconds(audioPlayer.current?.duration)}
              </span>
            </div>
          </div>
          <div className={cx("player-controls-right")}>
            <div className={cx("level-item-right") + " " + cx("is-narrow")}>
              <Buttonn
                icon={SlideshowOutlinedIcon}
                tooltip={"Xem MV"}
                customIcon="is20"
              />
            </div>
            <div className={cx("level-item-right") + " " + cx("is-narrow")}>
              <Buttonn
                icon={ClosedCaptionOffOutlinedIcon}
                customIcon="is20"
                tooltip={"Xem lời bài hát"}
                onClick={(e) => {
                  if (
                    tracks[audioIdx].lyric &&
                    tracks[audioIdx].lyric != null
                  ) {
                    readText(tracks[audioIdx].lyric);
                  } else {
                    handleClickMess();
                    setLyricSong("");
                  }
                }}
              />
            </div>
            <div className={cx("level-item-right") + " " + cx("is-narrow")}>
              <Buttonn
                icon={AirplayOutlinedIcon}
                customIcon={"is20"}
                tooltip={"Chế độ cửa sổ"}
              />
            </div>
            {/* <ControlAudio /> */}
            <div className={cx("level-item-right") + " " + cx("is-narrow")}>
              <Buttonn
                icon={volumeAudio > 0 ? VolumeUpOutlinedIcon : VolumeOffOutlinedIcon}
                customIcon={"is20"}
                onClick={(e) => handleMuteOn(e)}
              />
            </div>
            <div className={cx("cnk-duration-audio")}>
              <Slider
                className={cx("playback-completed")}
                value={Math.floor(volumeAudio * 100)}
                onChange={(e) => {
                  handleChangeVolume(e.target.value / 100);
                }}
                size={"small"}
              />
            </div>
            <div className={cx("level-item-right") + " " + cx("is-narrow")}>
              <span className={cx("divide")}></span>
            </div>
            <div
              className={cx("level-item-right") + " " + cx("is-narrow")}
              onClick={() => setSibarRight(!sibarRight)}
            >
              <Buttonn
                icon={QueueMusicOutlinedIcon}
                tooltip={"Danh sách phát"}
                customIcon={"is20"}
              />
            </div>
          </div>
        </div>

        <div className={cx("nav-bottom")}>
          <NavigationBottom />
        </div>
      </div>
    </div>
  );
}

export default NowPlaying;
