import { useState, useRef } from "react";
import styles from "./Detail.module.scss";
import classNames from "classnames/bind";
import Button from "../../../Button/Button";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import images from "../../../../assets/images";

const cx = classNames.bind(styles);

function Detail({
  isOpen,
  onClick,
  song,
  img,
  onPlay,
  isPlay = false,
  isPlaying = "",
}) {
  const [isOpenBg, setIsOpenBg] = useState(false);
  let classN = isOpen ? "is-open" : "is-close";

  return (
    <div className={cx("cnk-detail-playing") + " " + cx(classN)}>
      <div className={cx("detail-background")}>
        <div className={cx("video-blur-image")}>
          <canvas className={cx("react-blur-canvas")} />
        </div>
        <div className={cx("overlay")}></div>
        <div className={cx("detail-content")}>
          <div className={cx("detail-header")}>
            <div className={cx("left")}>
              <div className={cx("logo-small")}></div>
            </div>
            <div className={cx("tabs")}>
              <Link to={"/playlist"}>
                <span className={cx("tab-item") + " " + cx("is-active")}>
                  Danh sách đang phát
                </span>
              </Link>
            </div>
            <div className={cx("left")}>
              <Button
                setIcon={Icon.ChevronDown}
                className={"is50"}
                onClick={onClick}
              />
            </div>
          </div>
          <div className={cx("detail-body")}>
            <div className={cx("detail-media-list")}>
              <div className={cx("list-wrapper")}>
                <div className={cx("list")}>
                  <div className={cx("card")}>
                    <div className={cx("img-content")}>
                      <figure className={cx("img-48") + " " + cx(isPlaying)}>
                        <img src={img} alt="" />
                      </figure>
                    </div>
                    <div className={cx("img-info")}>
                      <div className={cx("title")}>{song}</div>
                      {/* <div className={cx("sub-title")}>abc,cvb,cas</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("detail-bottom")}></div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
