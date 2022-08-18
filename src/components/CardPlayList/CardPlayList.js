import React from "react";
import classNames from "classnames/bind";
import styles from "./CardPlayList.module.scss";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Link } from "react-router-dom";
import images from "../../assets/playlistImg";

const cx = classNames.bind(styles);
function CardPlayList() {
  return (
    <div className={cx("card-play-list")}>
      <div className={cx("card-container")}>
        <div className={cx("card-image")}>
          <figure className={cx("image")}>
            <img src={images.iilison} alt="" />
          </figure>
          <div className={cx("card-action")}>
              <div className={cx("icon-action")}>
              <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              className={cx("action-item")}
            >
              <PhotoCamera className={cx("item")}/>
            </IconButton>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              className={cx("action-item")}

            >
              <PhotoCamera />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              className={cx("action-item")}

            >
              <PhotoCamera />
            </IconButton>
              </div>
           
          </div>
          <div className={"opacity"}></div>
        </div>
        <div className={cx("card-content")}>
          <div className={cx("title")}>
            <Link to="/">Mở đầu hoàn hảo</Link>
          </div>
          <div className={cx("subtitle")}>
            <p>Subtitle</p>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default CardPlayList;
