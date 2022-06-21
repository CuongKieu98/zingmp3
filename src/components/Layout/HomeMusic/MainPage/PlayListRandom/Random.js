import React from "react";
import styles from "./Random.module.scss";
import classNames from "classnames/bind";
import Card from "../../../../Card/Card";

const cx = classNames.bind(styles);
const Random = ({playLists}) => {

  return (
    <div className="cnk-playlist">
      <div className="cnk-playlist-container">
        <h3 className="cnk-playlist-title">Có thể bạn muốn nghe</h3>
        <div className="cnk-playlist-wapper">
          <div className={cx("cnk-playlist-wp")}>
            <div className={cx("cnk-playlist-wp-container")}>
              {playLists.map((list) => (
                <div key={list.id} className={cx("cnk-playlist-item")}>
                  <div className={cx("cnk-playlist-normal")}>
                    <Card
                   
                      content={list.content}
                      href={list.href}
                      img={list.img}
                      subTiltle={list.subTiltle}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random;
