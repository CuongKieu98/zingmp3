import React, { useState, useEffect, useRef } from "react";
import styles from "./ChartPage.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
import getTopChart from "../../utils/apiMusic";
import GroupChart from "../../components/GroupChart/GroupChart";
import RIGHT_ACTIONS from "../../const/RIGHT_ACTION";
import Skeleton from "@mui/material/Skeleton";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularProgress from "@mui/material/CircularProgress";
import { getCharthome } from "../../utils/apiMusics";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabListItem from "../../components/TabList/TabListItem";
const cx = classNames.bind(styles);

function ChartPage() {
  const [chart, setChart] = useState([]);
  const [datasize, setDatasize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [value, setValue] = useState("vn");
  const [chartWeek, setChartWeek] = useState([]);
  const [itemChartWeek, setItemChartWeek] = useState([]);
  const timer = useRef();
  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  useEffect(() => {
    setLoadingPage(true);
    getCharthome().then((res) => {
      setChart(res.data.RTChart.items);
      setChartWeek(res.data.weekChart);
      setItemChartWeek(res.data.weekChart.vn);
      setLoadingPage(false);
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setItemChartWeek(chartWeek[newValue]);
  };
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
          {!loadingPage ? (
            chart
              .slice(0, datasize)
              .map((item, index) => (
                <GroupChart
                  key={item.encodeId}
                  rank={index + 1}
                  rankStatus={item.rank_status}
                  author={item.artistsNames}
                  name={item.title}
                  code={item.encodeId}
                  img={item.thumbnail}
                  right={RIGHT_ACTIONS.timeAction}
                  duration={item.duration}
                  className={"image-is40"}
                  customClass={"no-background"}
                  loading={loadingPage}
                />
              ))
          ) : (
            <>
              <Skeleton animation="wave" height={80} />
              <Skeleton height={80} />
              <Skeleton animation="wave" height={80} />
              <Skeleton height={80} />
              <Skeleton animation="wave" height={80} />
            </>
          )}
          {chart.slice(0, datasize).length < 20 &&
            chart.slice(0, datasize).length !== 0 && (
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

          <div className={cx("selection-header")}>
            <div className={cx("chart-title")}>
              <h3 className={cx("title")}>Bảng Xếp Hạng Tuần</h3>
              <PlayArrowIcon fontSize="large" className={cx("btn-play")} />
            </div>
          </div>
          <TabContext value={value}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              textColor="inherit"
              indicatorColor="secondary"
            >
              <Tab
                label="VIỆT NAM"
                value="vn"
                sx={{ fontSize: "1.875rem", color: "white" }}
              />
              <Tab
                label="US-UK"
                value="us"
                sx={{ fontSize: "1.875rem", color: "white" }}
              />
              <Tab
                label="K-POP"
                value="korea"
                sx={{ fontSize: "1.875rem", color: "white" }}
              />
            </TabList>
            <TabPanel value="vn" sx={{ height: "80%", padding: "0px" }}>
              <TabListItem data={itemChartWeek} loading={loadingPage} />
            </TabPanel>
            <TabPanel value="us" sx={{ height: "80%", padding: "0px" }}>
              <TabListItem data={itemChartWeek} loading={loadingPage} />
            </TabPanel>
            <TabPanel value="korea" sx={{ height: "80%", padding: "0px" }}>
              <TabListItem data={itemChartWeek} loading={loadingPage} />
            </TabPanel>
          </TabContext>
        </main>
      </div>
    </div>
  );
}

export default ChartPage;
