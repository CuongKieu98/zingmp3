
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Chart.module.scss";

import TextDisplay from "../Common/TextDisplay";
import GroupChart from "../GroupChart/GroupChart";

import RIGHT_ACTIONS from "../../const/RIGHT_ACTION";
import { getCharthome } from "../../utils/apiMusics";
const cx = classNames.bind(styles);
function Chart({ className }) {
  const [chart, setChart] = useState([]);
  const datasize = 3;

  useEffect(() => {
      getCharthome().then(res =>{
        setChart(res.data.RTChart.items?.slice(0, datasize))
      })
  }, []);

  return (
    <div className={cx("chart-home") + " " + cx(className)}>
      <div className={cx("bg-blur")}></div>
      <div className={cx("bg-alpha")}></div>
      <TextDisplay className={"section-header"} text={"#zingchart"} />
      <div className={cx("columns-is-multiline")}>
        <div className={cx("list-chart-column")}>
          {chart.map((item, index) => (
            <GroupChart
              key={item.encodeId}
              rank={index +1}
              author={item.artistsNames}
              name={item.title}
              img={item.thumbnail}
              code={item.encodeId}
              duration={item.duration}
              right={RIGHT_ACTIONS.percent}
              className={"image-is40"}
              customClass={"mb-10"}
            />
          ))}
          <div className={cx("is-center")}>
            <Link to={"/zing-chart"} className={cx("show-more")}>
              {chart.length === 0 ? "Đang tải..." : "Xem thêm"}
            </Link>
          </div>
        </div>
        <div className={cx("chart-item")}></div>
      </div>
    </div>
  );
}

export default Chart;
