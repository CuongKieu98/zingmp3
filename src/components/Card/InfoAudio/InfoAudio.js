import React from "react";
import styles from "./InfoAudio.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import * as Icon from "react-bootstrap-icons";
const cx = classNames.bind(styles);

function InfoAudio({ song, img, onClick,artist, isPlay = false }) {
  return (
    <div className={cx("media")}>
      <div className={cx("media-left")} style={{ cursor: "pointer" }}>
        <div className={cx("thumbnail-wrapper")}>
          <div className={cx("thumbnail")} onClick={onClick}>
            <figure className={cx("image")}>
              <img src={img} alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className={cx("media-content")}>
        <div className={cx("is-mark")}>
          <div className={cx("song-info-wrapper")}>
            <span className={cx("song-title-item")}>
                <div className={cx("title-wrapper")}>
                  <span className={cx("title-item")}>{song}</span>
                </div>
            </span>
          </div>
        </div>
        <h3 className={cx("subtitle-one-line")}>
          <div className={cx("is-ghost")} to={"/"}>
            {artist}
          </div>

        </h3>
      </div>
      <div className={cx("media-right")}>
        <div className={cx("level")}>
          <div className={cx("level-item")}>
            <Button
              setIcon={Icon.Heart}
              customIcon={"is16"}
              title={"Thêm vào thư viện"}
            />
          </div>
          <div className={cx("level-item")}>
            <Button setIcon={Icon.ThreeDots} title={"Xem thêm"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoAudio;
