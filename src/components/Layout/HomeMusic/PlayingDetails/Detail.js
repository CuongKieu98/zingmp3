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
  isPlay = false,
  isPlaying = "",
  artist,
  lyrics,
  currentTime,
  onClickEvent,
}) {
  const [isOpenBg, setIsOpenBg] = useState();
  const [tabActive, setTabActive] = useState(true);
  let liRef = useRef([]);
  let classActive = tabActive ? "active" : ""
  let classN = isOpen ? "is-open" : "is-close";
  const refs = listTrack.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {});
  const handleScroll = event => {
    console.log('scrollTop: ', event.currentTarget.scrollTop);
    console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  };
  useEffect(() =>{
    
  })

  // const ref2 = useRef()
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
                className={cx("tab-item") + " " +cx(classActive)}
                onClick={(e) => {
                  setTabActive(true);
                }}
              >
                Đang phát
              </span>
              <span
                className={cx("tab-item") + " " +cx(classActive)}
                onClick={(e) => {
                  setTabActive(false);
                  onClickEvent()
                }}
              >
                Lời bài hát
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
            {tabActive ? (
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
            ) : (
              <div className={cx("lyric-container")}>
                <div className={cx("column-is-multiline")}>
                  <div className={cx("column-size")}>
                    <ul className={cx("scroll-content")} onScroll={handleScroll} >
                      {lyrics &&
                        lyrics.map((item, index) => {
                          if(liRef.current[index+2]?.className.includes("current")){
                            liRef.current[index].scrollIntoView({behavior:"smooth"})
                          }

                          return (
                            <li
                              
                              ref={(ref) => (liRef.current[index] = ref)}
                              className={
                                cx("item") +
                                " " +
                                cx(
                                  item[0].time.slice(0, -3) <= currentTime
                                    ? "current"
                                    : ""
                                )
                              }
                              key={index}
                            >
                              {item[0].lyric}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
