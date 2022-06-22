import React from "react";
import styles from "./Random.module.scss";
import classNames from "classnames/bind";
import Card from "../../../../Card/Card";
import Radio from "../../../../Radio/Radio";

const cx = classNames.bind(styles);
const Random = ({playLists, title,isRadio}) => {
  let radioClass = isRadio ? "is14" : "is20"

  return (
    <div className="cnk-playlist">
      <div className="cnk-playlist-container">
        <h3 className="cnk-playlist-title">{title}</h3>
        <div className="cnk-playlist-wapper">
          <div className={cx("cnk-playlist-wp")}>
            <div className={cx("cnk-playlist-wp-container")}>
              {playLists.map((list) => (
                <div key={list.id} className={cx("cnk-playlist-item") +" "+ cx(radioClass)}>
                  <div className={cx("cnk-playlist-normal")}>
                    {!isRadio ? (<Card
                      author={list.Author}
                      content={list.content}
                      href={list.href}
                      img={list.img}
                      subTiltle={list.subTiltle}
                    />) : <Radio />}
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
