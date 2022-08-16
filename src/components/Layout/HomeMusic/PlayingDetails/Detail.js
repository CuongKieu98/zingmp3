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
  artist,
  lyrics,
}) {
  const [isOpenBg, setIsOpenBg] = useState();
  let classN = isOpen ? "is-open" : "is-close";
  const refs = listTrack.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {});

  // const ref2 = useRef()
  useEffect(() => {
    refs[onPlaying + 1].current?.scrollIntoView({
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
              <span
                className={cx("tab-item") + " " + cx("is-active")}
              >
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
                      <div className={cx("sub-title")}>{artist}</div>
                   
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div className={cx("lyric-container")}>
              <div className={cx("column-is-multiline")}>
                <div className={cx("column-size")}>
                  <ul className={cx("scroll-content")}>

                    {lyrics && lyrics.map((item,index) =>(
                        <li className={cx("item")} key={index}>{item[0].lyric}</li>
                    ))}
      
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
