
import React from 'react'
import styles from "./NowPlaying.module.scss";
import classNames from "classnames/bind";
import Media from '../../../Card/Media/Media';
import Button from '../../../Button/Button';
import * as Icon from 'react-bootstrap-icons'

const cx = classNames.bind(styles);
function NowPlaying() {
  return (
    <div className={cx('now-playing-bar')}>
        <div className={cx('player-controls') +" " + cx('clickable')}>
          <div className={cx("level")+ " " + cx("player-controls-container")}>
            <div className={cx("player-controls-left")}>
              <div className={cx('level-item') + " " + cx('is-narrow')}>
                <Media />

              </div>
            </div>
            <div className={cx('player-controls-center')}>
                <div className={cx('level-item')}>
                  <div className={cx('action')}>
                    <Button setIcon={Icon.Shuffle} title={"Tắt phát ngẫu nhiên"}/>
                    <Button setIcon={Icon.ArrowLeft} title={"Quay lại"}/>
                    <Button setIcon={Icon.PlayCircle} title={"Phát"}/>
                    <Button setIcon={Icon.ArrowRight} title={"Bài tiếp theo"}/>
                    <Button setIcon={Icon.ArrowRepeat} title={"Phát lại tất cả"}/>
                  </div>

                </div>
                <div className={cx("level-item") + " " + cx('time-bar')}>
                  <span className={cx('time-left')}>00:00</span>
                  <div className={cx('cnk-duration-bar')}>
                    ----
                  </div>
                  <span className={cx('time-right')}>04:22</span>

                </div>
            </div>
            <div className={cx('player-controls-right')}>
                <div className={cx('level-item') + " " + cx('is-narrow')}>
                  <Button setIcon={Icon.CameraVideo} title={"Xem MV"}/>
                </div>
                <div className={cx('level-item') + " " + cx('is-narrow')}>
                  <Button setIcon={Icon.MusicPlayer} title={"Xem lời bài hát"}/>
                </div>
                <div className={cx('level-item') + " " + cx('is-narrow')}>
                  <Button setIcon={Icon.WindowDesktop} title={"Chế độ cửa sổ"}/>
                </div>
                <div className={cx('level-item') + " " + cx('is-narrow')}>
                  <Button setIcon={Icon.Speaker} title={""}/>
                </div>
                <div className={cx('level-item') + " " + cx('is-narrow')}>
                  <span className={cx('divide')}></span>
                </div>
                <div className={cx('level-item') + " " + cx('is-narrow')}>
                  <Button setIcon={Icon.MusicNoteList} title={''}/>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NowPlaying