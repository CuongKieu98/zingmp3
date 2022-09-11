import React from "react";
import classNames from "classnames/bind";

import styles from "./GroupChart.module.scss";
import Media from "../Media/Media";
const cx = classNames.bind(styles);

function GroupChart({
  author,
  name,
  img,
  rank,
  right,
  duration,
  className,
  rankStatus,
  customClass,
  code,
  loading
}) {
  return (
    <div className={cx("list")}>
      <div className={cx("chart-song-item") + " " + cx(customClass)}>
        <div className={cx("list-item-chart")}>
          <Media
            author={author}
            name={name}
            duration={duration}
            rankStatus={rankStatus}
            img={img}
            rank={rank}
            right={right}
            code={code}
            className={className}
            loadingPage={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default GroupChart;
