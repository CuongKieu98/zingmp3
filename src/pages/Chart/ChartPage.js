import React, { useState, useEffect } from "react";
import styles from "./ChartPage.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
import getTopChart from "../../utils/apiMusic";
import GroupChart from "../../components/GroupChart/GroupChart";
import RIGHT_ACTIONS from "../../const/RIGHT_ACTION";
const cx = classNames.bind(styles);

function ChartPage() {
  const [chart, setChart] = useState([]);
  const datasize = 11;

  useEffect(() => {
    axios
      .request(getTopChart)
      .then(function (response) {
        let data = response.data.slice(0, datasize);
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
          {chart.map((item) => (
            <GroupChart
              key={item.trackMetadata.trackUri}
              rank={item.chartEntryData.currentRank}
              author={item.trackMetadata.artists.map((a) => a.name).join(", ")}
              name={item.trackMetadata.trackName}
              img={item.trackMetadata.displayImageUri}
              right={RIGHT_ACTIONS.timeAction}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default ChartPage;
