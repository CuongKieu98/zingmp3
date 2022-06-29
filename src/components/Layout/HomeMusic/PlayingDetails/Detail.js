import { useState, useRef, useEffect, createRef } from "react";
import styles from "./Detail.module.scss";
import classNames from "classnames/bind";
import Button from "../../../Button/Button";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import images from "../../../../assets/images";
import Media from "../../../Label/Media/Media";

const cx = classNames.bind(styles);
function Detail({
  listTrack,
  isOpen,
  onClick,
  song,
  img,
  onPlay,
  isPlay = false,
  isPlaying = "",
  onPlaying,
}) {
  const [isOpenBg, setIsOpenBg] = useState();
  let classN = isOpen ? "is-open" : "is-close";
  const refs = listTrack.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {});

  // const ref2 = useRef() 
  useEffect(() => {
    refs[onPlaying+1].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [onPlaying]);

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
              <span className={cx("tab-item") + " " + cx("is-active")}>
                Danh sách đang phát
              </span>
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
          <div className={cx("detail-bottom")}>
            <div className={cx("test1")}>
              <div className={cx("test2")}>
                {listTrack.map((list, index) => {
                  return (
                    <div
                      className={cx("media-list")}
                      key={list.id}
                      id={index}
                      ref={refs[index+1]}
                    >
                      <Media
                        key={index}
                        index={index}
                        title={list.title}
                        img={list.img}
                        onClick={onPlay}
                        isPlay={isPlay}
                        isActive={onPlaying === index}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
