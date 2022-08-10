import React from "react";
import styles from "./Radio.module.scss";
import classNames from "classnames/bind";
import images from "../../assets/images";
import playListImg from "../../assets/playlistImg";
import Button from "../Button/Button";
import * as Icon from "react-bootstrap-icons";

const cx = classNames.bind(styles);

function Radio({ content, img, imgHost, subTiltle, href }) {
  return (
    <div className={cx("radio-container")}>
      <div className={cx("radio-content")}>
        <div className={cx("radio-top-content")}>
          <img src={images.circle} alt="" className={cx("img-details")} />
          <div className={cx("radio-card-img")}>
            <figure className={cx("img")}>
              <img className={cx("img-detail")} src={img} alt="" />
            </figure>
          </div>
          <div className={cx("opacity")}></div>
          <figure className={cx("img-host")}>
            <img src={imgHost} alt="" />
          </figure>
          <div className={cx("action-play")}>
            <button className={cx("btn-action-play")}>
              <Icon.PlayCircle className={cx("icon-play")} />
            </button>
          </div>
          <figure className={cx("img-label")}>
            <img src={images.live} alt="" />
          </figure>
        </div>
        <div className={cx("radio-bot-content")}>
          <h3 className={cx("title")}>{content}</h3>
          <h3 className={cx("sub-title")}>{subTiltle}</h3>
        </div>
      </div>
    </div>
  );
}

export default Radio;
