import React from "react";
import classNames from "classnames/bind";

import { IconButton } from "@mui/material";
import images from "../../assets/playlistImg";
import styles from "./Media.module.scss";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CardInfo from "../CardInfo/CardInfo";
import RIGHT_ACTIONS from "../../const/RIGHT_ACTION";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch } from "react-redux/es/exports";
import { green } from "@mui/material/colors";
import axios from "axios";

import stringUtils from "../../utils/stringUtils";
import { addPlaylist } from "../../redux/actions/actions";
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
  const dispatch = useDispatch();
  let classRank = "";
  const quatity = 128;
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
  const handleAddPlaylist = () => {
    let data = {};
    let source = "";
    axios
      .get(`https://mp3.zing.vn/xhr/media/get-source`, {
        params: {
          type: "audio",
          key: code,
        },
      })
      .then((res) => {
        data = res.data.data;
        source = data.source["128"];
        dispatch(
          addPlaylist([
            {
              id: data.id,
              title: data.title,
              name: data.name,
              artists_names: data.artists_names,
              code: data.code,
              audioSrc: source,
              duration: data.duration,
              img: data.thumbnail,
              rank_status: "stand",
              lyric:data.lyric,
              position: 2,
            },
          ])
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={cx("media")}>
      <div className={cx("media-left")} onClick={handleAddPlaylist}>
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
          <div className="opacity"></div>
          <div className={cx("action-container")}>
            <div className={cx("action")}>
              <IconButton>
                <PlayArrowIcon />
              </IconButton>
            </div>
          </div>
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
