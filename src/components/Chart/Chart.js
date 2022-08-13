import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Chart.module.scss";
import Media from "../Media/Media";
import TextDisplay from "../Common/TextDisplay";
import GroupChart from "../GroupChart/GroupChart";
import request from "../../utils/request";
const cx = classNames.bind(styles);
function Chart({ className }) {
  const [chart, setChart] = useState([]);
  const ListMusic = 3;

  useEffect(() => {
    request
      .get("xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1")
      .then((res) => {
        let item = res.data.data.song.slice(0, ListMusic);
        setChart(item);
        console.log(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={cx("chart-home") + " " + cx(className)}>
      <div className={cx("bg-blur")}></div>
      <div className={cx("bg-alpha")}></div>
      <TextDisplay className={"section-header"} text={"#zingchart"} />
      <div className={cx("columns-is-multiline")}>
        <div className={cx("list-chart-column")}>
          {chart.map((item,index) => (
            <GroupChart
              key={item.id}
              rank={index+1}             
              author={item.artists_names}
              name={item.name}
              img={item.thumbnail}
            />
          ))}
          <div className={cx("is-center")}>
            <Link to={"/zing-chart"} className={cx("show-more")}>
              Xem thêm
            </Link>
          </div>
        </div>
        <div className={cx("chart-item")}></div>
      </div>
    </div>
  );
}

export default Chart;
