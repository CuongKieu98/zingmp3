import React from "react";
import classNames from "classnames/bind";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./GroupChart.module.scss";
import Media from "../Media/Media";
const cx = classNames.bind(styles);

function GroupChart({ author, name, img }) {
  return (
    <div className={cx("list")}>
      <div className={cx("chart-song-item")}>
        <div className={cx("list-item-chart")}>
          <Media author={author} name={name} img={img} />
        </div>
      </div>
    </div>
  );
}

export default GroupChart;
