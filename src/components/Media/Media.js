import React from "react";
import classNames from "classnames/bind";

import { IconButton } from "@mui/material";
import images from "../../assets/playlistImg";
import styles from "./Media.module.scss";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CardInfo from "../CardInfo/CardInfo";
import RIGHT_ACTIONS from "../../const/RIGHT_ACTION";
const cx = classNames.bind(styles);

function Media({ author, name, img, rank, right }) {
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
  return (
    <div className={cx("media")}>
      <div className={cx("media-left")}>
        <div className={cx("song-prefix")}>
          <span className={cx("number") + " " + cx(classRank)}>{rank}</span>
          <div className={cx("sort")}>
            <HorizontalRuleIcon />
          </div>
        </div>
        <div className={cx("song-thumb")}>
          <figure className={cx("image-is40")} title="aaa">
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
            <div className={cx("duration")}>3:20</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Media;