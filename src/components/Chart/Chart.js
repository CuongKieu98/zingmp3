import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Chart.module.scss";
import Media from "../Media/Media";
import TextDisplay from "../Common/TextDisplay";
import GroupChart from "../GroupChart/GroupChart";
import request from "../../utils/request";
import  getTopChart  from "../../utils/apiMusic";
const cx = classNames.bind(styles);
function Chart({ className }) {
  const [chart, setChart] = useState([]);
  const datasize = 3;

  useEffect(() => { 
    axios.request(getTopChart).then(function (response) {
      let data = response.data.slice(0,datasize)
      setChart(data)
      console.log(data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);
  return (
    <div className={cx("chart-home") + " " + cx(className)}>
      <div className={cx("bg-blur")}></div>
      <div className={cx("bg-alpha")}></div>
      <TextDisplay className={"section-header"} text={"#zingchart"} />
      <div className={cx("columns-is-multiline")}>
        <div className={cx("list-chart-column")}>
          {chart.map((item) => (
            <GroupChart
              key={item.trackMetadata.trackUri}
              rank={item.chartEntryData.currentRank}             
              author={item.trackMetadata.artists.map(a => a.name)}
              name={item.trackMetadata.trackName}
              img={item.trackMetadata.displayImageUri}
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
