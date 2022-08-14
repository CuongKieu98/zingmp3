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
import BoxChart from "../../components/BoxChart/BoxChart";
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
    axios
      .request(getTopChart)
      .then(function (response) {
        let data = response.data.tracks.slice(0, datasize);
        console.log(data);
        setChart(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [datasize]);
  const handleClick = () => {
    if (!loading) {
      setDatasize(20);
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
            chart.map((item, index) => (
              <GroupChart
                key={item.key}
                rank={index + 1}
                author={item.artists.map((a) => a.alias).join(", ")}
                name={item.title}
                img={item.images.background}
                right={RIGHT_ACTIONS.timeAction}
                className={"image-is40"}
              />
            ))
          ) : (
            <Skeleton height={100} />
          )}
          {chart.length < 20 && chart.length !== 0 && (
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
          <div className={cx("week-chart-selection")}>
          <div className={cx("selection-header")}>
              <div className={cx("chart-title")}>
                <h3 className={cx("title")}>Bảng Xếp Hạng Tuần</h3>
              </div>
              <BoxChart />
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ChartPage;
