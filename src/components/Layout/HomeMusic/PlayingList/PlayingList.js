import React from "react";
import styles from "./PlayingList.module.scss";
import classNames from "classnames/bind";
import Media from "../../../Label/Media/Media";

const cx = classNames.bind(styles);
function PlayingList({ listTrack, onPlay,onPlaying,isPlay}) {
  
  return (
    // move main page

    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("tab-bar") + " level"}>
          <div className={cx("isLeft") + " level-left"}>
            <div className={cx("is-active") + " level-item"}>
              <h6 className={cx("title") + " has-text-white"}>
                Danh sách phát
              </h6>
            </div>
            <div className={cx("is-noactive") + " level-item"}>
              <h6 className={cx("title") + " has-text-white"}>Nghe gần đây</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("scroll")}>
        <div
          tabIndex={0}
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            id={"scroll"}
            style={{
              position: "absolute",
              inset: "0px",
              overflow: "hidden scroll",
              marginRight: "-6px",
              marginBottom: "0px",
            }}
          >
            <div className={cx("scroll-child")}>
              <div
                className={cx("list-item-container")}
                style={{ marginTop: "0px" }}
              >
                {/* map-list item */}
                <div className={cx("list-item-parent")}>
                  {listTrack.map((track,index) => (
                    <div className={cx("item-full-left")} key={track.id}>
                      <Media
                        index={index}
                        title={track.title}
                        img={track.img}
                        audio={track.audioSrc}
                        onClick={onPlay}
                        isActive={onPlaying === index}
                        isPlay={isPlay}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayingList;
