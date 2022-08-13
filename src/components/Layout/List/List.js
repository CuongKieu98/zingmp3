import React from "react";
import styles from "./List.module.scss";
import classNames from "classnames/bind";
import Button from "../../Button/Button";
import Media from "../../Label/Media/Media";
import * as Icon from "react-bootstrap-icons";
import ITEM_TRACKS from "../../../const/ITEM_TRACKS";
import images from "../../../assets/playlistImg";
const cx = classNames.bind(styles);

function List({}) {
  return (
    <div className={cx("cnk-mainpage")}>
      <div className={cx("body-mainpage")}>
        <main className={cx("cnk-selection")}>
          <div className={cx("cnk-container")}>
            {/* playlist */}
            <div className={cx("list-container")}>
              <div className={cx("clearfix")}>
                <div className={cx("playlist-header")}>
                  <div className={cx("list-left")}>
                    <div className={cx("header-thumbnail")}>
                      <div className={cx("card-img")}>
                        <div className={cx("c-thumb")}>
                       
                            <img src={images.miule2} alt="" className={cx("img-is48")}/>
                     
                          <div className={cx("opacity")}></div>
                        </div>
                        {/* <div className={cx("action-container")}>
                          <div className={cx("cnk-box-action")}>
                            <Button setIcon={Icon.PlayCircle} />
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className={cx("list-content")}>
                    <div className={cx("content-top")}>
                      <h3 className={cx("title")}>My Play List</h3>
                      <div className={cx("release")}>Cập nhật:28/06/2022</div>
                      <div className={cx("like")}>31K người yêu thích</div>
                    </div>
                    {/* <div className={cx("action-content")}>
                      <Button setIcon={Icon.Play} />
                    </div> */}
                  </div>
                  <div className={cx("list-left")}></div>
                </div>
                <div className={cx("playlist-content")}>
                  <div className={cx("song-list-select")}>
                    <div className={cx("select-header")}>
                      <div className={cx("header-left")}>
                        <div className={cx("sort-wrapper")}>
                          <div className={cx("column-text")}>Bài hát</div>
                        </div>
                      </div>
                      <div className={cx("header-content")}>
                        <div className={cx("column-text")}>Album</div>
                      </div>
                      <div className={cx("header-right")}>
                        <div className={cx("column-text")}>Thời gian</div>
                      </div>
                    </div>
                    <div>
                      {ITEM_TRACKS.map((track, index) => (
                        <div className={cx("select-item")} key={track.id}>
                          <Media
                            index={index}
                            title={track.title}
                            img={track.img}
                            audio={track.audioSrc}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default List;
