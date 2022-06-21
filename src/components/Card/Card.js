import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import * as Icon from "react-bootstrap-icons";
import images from "../../assets/images";

const cx = classNames.bind(styles);
const Card = ({ content, href, img, hrefAuth, Author, subTiltle }) => {
  return (
    <div className={cx("cnk-card")}>
      <div>
        <a title={content} href={href}>
          <div className={cx("cnk-card-img")}>
            <figure className={cx("image")}>
              <img className={cx('img-card')} src={img} alt="" />
            </figure>
            <div className={cx("opacity")}></div>
            <div className={cx("cnk-playlist-action")}>
              <div className={cx("cnk-card-action")}>
                <button className={cx('card-like')}>
                  <Icon.Heart className={cx('icon-card-like')+  " " + cx('icon')} />
                  <Icon.HeartFill className={cx('icon-card-likefull')+  " " + cx('icon')}/>
                </button>
                <button className={cx('btn-action-play')}>
                  <Icon.PlayCircle className={cx('icon-card-play')}/>
                  {/* //<img src={images.playmusicicon} className={cx('icon-card-play')} alt=''/> */}
                </button>
                <button>
                  <Icon.ThreeDots />
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className={cx("cnk-card-content")}>
        <h4 className={cx("cnk-card-title")}>
          <a title={content} href={href}>
            <span>{content}</span>
          </a>
        </h4>
        <h3>
          {Author && (
            <a className={cx("cnk-card-author")} href={hrefAuth}>
              {Author}
            </a>
          )}
          {subTiltle && (
            <span className={cx("cnk-card-subtitle")}>{subTiltle}</span>
          )}
        </h3>
      </div>
    </div>
  );
};

export default Card;
