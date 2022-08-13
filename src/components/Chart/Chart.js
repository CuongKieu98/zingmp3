import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import classNames from "classnames/bind";
import axios from "axios"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Chart.module.scss";
import Media from "../Media/Media";
import TextDisplay from '../Common/TextDisplay';
import GroupChart from '../GroupChart/GroupChart';
import request from "../../utils/request";
const cx = classNames.bind(styles);
function Chart({className}) {
  useEffect(() =>{
    axios.get("http://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1")
    .then((res) =>{
      console.log(res.data);
    })
    .catch((err) =>{
      console.log(err.message)
    })
  },[])
  return (
      <div className={cx("chart-home") + " " + cx(className)}>
          <div className={cx("bg-blur")}></div>
          <div className={cx("bg-alpha")}></div>
          <TextDisplay className={"section-header"} text={"#zingchart"}/>
          <div className={cx("columns-is-multiline")}>
            <div className={cx("list-chart-column")}>
              <GroupChart />
              <GroupChart />
              <GroupChart />
              <div className={cx("is-center")}>
                <Link to={"/zing-chart"} className={cx("show-more")}>Xem thêm</Link>
              </div>
            </div>
            <div className={cx("chart-item")}>

            </div>
          </div>

      </div>
  )
}

export default Chart