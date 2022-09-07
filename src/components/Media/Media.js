import React, { useState } from "react";
import classNames from "classnames/bind";

import { IconButton } from "@mui/material";
import images from "../../assets/images";

import styles from "./Media.module.scss";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CardInfo from "../CardInfo/CardInfo";
import RIGHT_ACTIONS from "../../const/RIGHT_ACTION";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch } from "react-redux/es/exports";


import stringUtils from "../../utils/stringUtils";
import { addPlaylist } from "../../redux/actions/actions";
import { getInfoSong, getSong } from "../../utils/apiMusics";
const cx = classNames.bind(styles);

function Media({
  author,
  name,
  img,
  rank,
  right,
  duration,
  rankStatus,
  className,
  code,
}) {
  const isLoading = false;
  const [loading, setLoading] = useState(isLoading);
  const dispatch = useDispatch();
  let classRank = "";

  switch (rank) {
    case 1:
      classRank = "is-top1";
      break;
    case 2:
      classRank = "is-top2";
      break;
    case 3:
      classRank = "is-top3";
      break;
    default:
      classRank = "is-top100";
      break;
  }
  const handleAddPlaylist = async () => {
    setLoading(!isLoading);
    let data = {};
    let source = "";
    await getSong(code).then((res) => {
      source = res.data[128];
    }).catch(err =>{
      console.log(err);
    });
    await getInfoSong(code).then((res) => {
      console.log(res.data);
      data = res.data;
      setLoading(isLoading);
    });
    dispatch(
      addPlaylist([
        {
          id: data.encodeId,
          title: data.title,
          name: data.title,
          artists_names: data.artistsNames,
          code: data.encodeId,
          audioSrc: source,
          duration: data.duration,
          img: data.thumbnailM,
          rank_status: "stand",
          lyric: data.lyric,
          position: 2,
        },
      ])
    );
  };
  return (
    <div className={cx("media")} onClick={handleAddPlaylist}>
      <div className={cx("media-left")}>
        <div className={cx("song-prefix")}>
          <span className={cx("number") + " " + cx(classRank)}>{rank}</span>
          {right === RIGHT_ACTIONS.timeAction && (
            <div className={cx("sort")}>
              {rankStatus?.toLowerCase() === "up" ? (
                <ArrowDropUpIcon fontSize="large" sx={{ color: "#6cff72" }} />
              ) : rankStatus?.toLowerCase() === "down" ? (
                <ArrowDropDownIcon fontSize="large" sx={{ color: "#e35050" }} />
              ) : (
                <HorizontalRuleIcon />
              )}
            </div>
          )}
        </div>
        <div className={cx("song-thumb")}>
          <figure className={cx(className)} title="aaa">
            <img src={img} alt={name} />
          </figure>
          {loading && (
            <>
              <div className={cx("opacity")}></div>
              <div className={cx("action-container")}>
                <div className={cx("action")}>
                  <img src={images.spiner} alt="" />
                </div>
              </div>
            </>
          )}
        </div>
        <CardInfo author={author} name={name} />
      </div>
      <div className={cx("media-right")}>
        {right === RIGHT_ACTIONS.percent ? (
          <div className={cx("hover-item")}>
            <span>40%</span>
          </div>
        ) : (
          <div className={cx("action-item")}>
            <div className={cx("duration")}>
              {stringUtils.convertSeconds(duration)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Media;
