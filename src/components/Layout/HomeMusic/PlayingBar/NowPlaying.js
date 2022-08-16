import { useState, useRef, useEffect } from "react";
import styles from "./NowPlaying.module.scss";
import classNames from "classnames/bind";
import InfoAudio from "../../../Card/InfoAudio/InfoAudio";
import Button from "../../../Button/Button";
import * as Icon from "react-bootstrap-icons";

import PlayingList from "../PlayingList/PlayingList";

import Detail from "../PlayingDetails/Detail";
import NavigationBottom from "../../../NavigationBottom/NavigationBottom";
import { Slider } from "@mui/material";

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

  const widthRef = useRef();
  let classBar = sibarRight ? "show" : "";
  let responeNav = openClass ? "isShow" : "";
  //handleBtn
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
  const handlePause = (e) => {
    audioPlayer.current.pause();
    setIsPlay(false);
  };
  const handleNext = (e) => {
    if (audioIdx < tracks.length - 1) {
      setAudioIdx(audioIdx + 1);
    } else {
      setAudioIdx(0);
    }
    handlePlay();
  };
  const handlePrev = (e) => {
    if (audioIdx - 1 < 0) {
      setAudioIdx(tracks.length - 1);
    } else {
      setAudioIdx(audioIdx - 1);
    }
    handlePlay();
  };
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
  useEffect(() => {
    if (!isPlay) {
      return;
    } else {
      audioPlayer.current.play();
    }
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
        console.log(dataLrc);
      });
  };
  return (
    <div className={cx("now-playing-bar")}>
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
        artist={tracks[audioIdx].artists_names}
        isOpen={openClass}
        onClick={() => setOpenClass(false)}
        isPlaying={isPlay && "border"}
        onPlaying={audioIdx}
        lyrics={lyricSong}
        currentTime={currentTime}
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
          <div className={cx("player-controls-left") + " " + cx(responeNav)}>
            <div className={cx("level-item-left") + " " + cx("is-narrow")}>
              <InfoAudio
                isPlay={isPlay}
                song={tracks[audioIdx].title}
                img={tracks[audioIdx].img}
                onClick={() => setOpenClass(!openClass)}
              />
            </div>
          </div>

          <div className={cx("player-controls-center")}>
            <div className={cx("level-item")}>
              <div className={cx("action")}>
                <Button
                  setIcon={Icon.Shuffle}
                  className={"is36min"}
                  title={"Tắt phát ngẫu nhiên"}
                  customIcon={"is16"}
                  show={openClass ? "" : "isShow"}
                />
                <Button
                  disabled={audioIdx === 0 ? true : false}
                  setIcon={Icon.SkipStartFill}
                  onClick={handlePrev}
                  className={"is36"}
                />
                <Button
                  setIcon={!isPlay ? Icon.PlayFill : Icon.PauseFill}
                  onClick={!isPlay ? handlePlay : handlePause}
                  className={"is40"}
                />
                <Button
                  setIcon={Icon.SkipEndFill}
                  className={"is36"}
                  onClick={handleNext}
                />
                <Button
                  setIcon={Icon.ArrowRepeat}
                  className={"is36min"}
                  title={"Phát lại tất cả"}
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
              <Button
                setIcon={Icon.Youtube}
                className={"is36"}
                title={"Xem MV"}
              />
            </div>
            <div className={cx("level-item-right") + " " + cx("is-narrow")}>
              <Button
                setIcon={Icon.JustifyRight}
                className={"is36"}
                title={"Xem lời bài hát"}
                onClick={(e) => {
                  readText(tracks[audioIdx].lyric);
                }}
              />
            </div>
            <div className={cx("level-item-right") + " " + cx("is-narrow")}>
              <Button
                setIcon={Icon.Pip}
                className={"is36"}
                title={"Chế độ cửa sổ"}
              />
            </div>
            {/* <ControlAudio /> */}
            <div className={cx("level-item-right") + " " + cx("is-narrow")}>
              <Button
                setIcon={volumeAudio > 0 ? Icon.VolumeUp : Icon.VolumeMute}
                className={"is36"}
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
              <Button
                setIcon={Icon.MusicNoteList}
                title={"Danh sách phát"}
                className={"is36"}
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
