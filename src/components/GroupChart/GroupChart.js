import React from "react";
import classNames from "classnames/bind";

import styles from "./GroupChart.module.scss";
import Media from "../Media/Media";
const cx = classNames.bind(styles);

function GroupChart({ author, name, img,rank,right,className }) {
  return (
    <div className={cx("list")}>
      <div className={cx("chart-song-item")}>
        <div className={cx("list-item-chart")}>
          <Media author={author} name={name} img={img} rank={rank} right={right} className={className}/>
        </div>
      </div>
    </div>
  );
}

export default GroupChart;
