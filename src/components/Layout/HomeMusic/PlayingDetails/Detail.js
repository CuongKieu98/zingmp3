import { useState, useRef, useEffect, createRef } from "react";
import styles from "./Detail.module.scss";
import classNames from "classnames/bind";
import Button from "../../../Buttonn/Button";
import * as Icon from "react-bootstrap-icons";

const cx = classNames.bind(styles);
function Detail({
  listTrack,
  isOpen,
  onClick,
  song,
  img,
  isPlaying = "",
  artist,
  lyrics,
  currentTime,
  onClickEvent,
}) {
  const [tabActive, setTabActive] = useState(true);
  let liRef = useRef([]);
  let classActive1 = tabActive ? "is-active" : "";
  let classActive2 = tabActive ? "" : "is-active"
  let classN = isOpen ? "is-open" : "is-close";

  const refs = listTrack.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {});




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
                className={cx("tab-item") + " " +cx(classActive1)}
                onClick={(e) => {
                  setTabActive(true);
                }}
              >
                Đang phát
              </span>
              <span
                className={cx("tab-item") + " " +cx(classActive2)}
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
                icon={Icon.ChevronDown}
                customIcon={"is25"}
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
                      <div className={cx("lyric-container")}>
                <div className={cx("column-is-multiline")}>
                  <div className={cx("column-size")}>
                    <ul className={cx("scroll-content")}>
                      {lyrics &&
                        lyrics.map((item, index) => {
                          if(liRef.current[index]?.className.includes("current")){
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
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={cx("lyric-container")}>
                <div className={cx("column-is-multiline")}>
                  <div className={cx("column-size")}>
                    <ul className={cx("scroll-content")}>
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
