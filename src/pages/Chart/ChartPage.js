import React, { useState, useEffect, useRef } from "react";
import styles from "./ChartPage.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
import getTopChart from "../../utils/apiMusic";
import GroupChart from "../../components/GroupChart/GroupChart";
import RIGHT_ACTIONS from "../../const/RIGHT_ACTION";
import Skeleton from "@mui/material/Skeleton";
import { Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CircularProgress from "@mui/material/CircularProgress";
import { getCharthome } from "../../utils/apiMusics";
const cx = classNames.bind(styles);

function ChartPage() {
  const [chart, setChart] = useState([]);
  const [datasize, setDatasize] = useState(10);
  const [loading, setLoading] = useState(false);
  const timer = useRef();
  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  useEffect(() => {
    getCharthome().then(res =>{
      setChart(res.data.RTChart.items)
      console.log(res.data.RTChart.items)
    })
  }, []);


  const handleClick = () => {
    if (!loading) {
      setDatasize(100);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <div className={cx("cnk-mainpage")}>
      <div className={cx("body-mainpage")}>
        <main className={cx("cnk-selection")}>
          <div className={cx("selection-header")}>
              <div className={cx("chart-title")}>
                <h3 className={cx("title")}>#zingchart</h3>
                <PlayArrowIcon fontSize="large" className={cx("btn-play")} />
              </div>
          </div>
          {chart.length !== 0 ? (
            chart.slice(0,datasize).map((item, index) => (
              <GroupChart
                key={item.encodeId}
                rank={index +1}
                rankStatus={item.rank_status}
                author={item.artistsNames}
                name={item.title}
                code={item.encodeId}
                img={item.thumbnail}
                right={RIGHT_ACTIONS.timeAction}
                duration={item.duration}
                className={"image-is40"}
                customClass={"no-background"}
              />
            ))
          ) : (
            <Skeleton height={100} />
          )}
          {chart.slice(0,datasize).length < 20 && chart.slice(0,datasize).length !== 0 && (
            <div className={cx("is-center")}>
              <Button className={cx("button-more")} onClick={handleClick}>
                {loading ? (
                  <span>
                    Đang tải
                    <CircularProgress color="inherit" size={14} />
                  </span>
                ) : (
                  "Xem thêm"
                )}
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default ChartPage;
