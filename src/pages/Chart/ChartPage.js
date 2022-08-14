import React, { useState, useEffect } from "react";
import styles from "./ChartPage.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
import getTopChart from "../../utils/apiMusic";
import GroupChart from "../../components/GroupChart/GroupChart";
import RIGHT_ACTIONS from "../../const/RIGHT_ACTION";
import Skeleton from "@mui/material/Skeleton";
import { Button } from "@mui/material";
const cx = classNames.bind(styles);

function ChartPage() {
  const [chart, setChart] = useState([]);
  const datasize = 11;

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
  }, []);
  return (
    <div className={cx("cnk-mainpage")}>
      <div className={cx("body-mainpage")}>
        <main className={cx("cnk-selection")}>
           { chart.map((item, index) => (
              <GroupChart
                key={item.key}
                rank={index + 1}
                author={item.artists.map((a) => a.alias).join(", ")}
                name={item.title}
                img={item.images.background}
                right={RIGHT_ACTIONS.timeAction}
              />
            ))
     
          }
          <div className={cx("is-center")}>
            <Button className={cx("button-more")} >Xem top 100</Button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ChartPage;
