import React from "react";
import styles from "./Singer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Event() {
  return (
    <div className={cx("cnk-card-event-item")}>
      <div>
        <div className={cx("cnk-card-event-img")}>
          <figure className={cx("image")}>
            <img src={""} alt={""} />
          </figure>
          <div className={cx("event-opacity")}></div>
          <div className={cx("cnk-card-content")}>
            <span className={cx("tag")}>TALKSHOW</span>
            <h3 className={cx("title")}>
              <span>Gặp gỡ PAY hát cùng Thịnh Suy</span>
            </h3>
            <h3 className={cx("subtitle")}>
              <span>18:00 Thứ Năm,23 Tháng 6</span>
            </h3>
          </div>
        </div>
      </div>
      <div className={cx('event-follows')}>
        <div className={cx('event-left')}>
            <div className={cx('event-item')}>
                <div className={cx('event-follower')}>
                    <h3 className={cx("title")}>Lượt quan tâm</h3>
                    <div className={cx('avatars')}>
                            +323 Lượt quan tâm
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
