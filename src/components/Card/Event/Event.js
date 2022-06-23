import {useState} from "react";
import styles from "./Event.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Event({title,img,content}) {
    const [follow,setFollow] = useState("QUAN TÂM");
    const [btnBg,setBtnBg] = useState("");
    const handleClick = () =>{
        if(follow.toUpperCase() === "QUAN TÂM"){
            setFollow("ĐÃ QUAN TÂM")
            setBtnBg("no-color");
        }else{
            setFollow("QUAN TÂM");
            setBtnBg("");
        }
    }
  return (
    <div className={cx("cnk-card-event-item")}>
      <div>
        <div className={cx("cnk-card-event-img")}>
          <figure className={cx("image")}>
            <img className={cx('img')} src={img} alt={""} />
          </figure>
          <div className={cx("event-opacity")}></div>
          <div className={cx("cnk-card-content")}>
            <span className={cx("tag")}>{title}</span>
            <h3 className={cx("title")}>
              <span>{content}</span>
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
                    <h3 className={cx("title-flw")}>Lượt quan tâm</h3>
                    <div className={cx('avatars')}>
                            +323 Lượt quan tâm
                    </div>
                </div>
            </div>
        </div>
        <div className={cx('event-right')}>
            <button className={cx('event-btn') + " " + cx(btnBg)} onClick={handleClick}>{follow}</button>
        </div>
      </div>
    </div>
  );
}

export default Event;
