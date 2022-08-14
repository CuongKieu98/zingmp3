import React from "react";
import classNames from "classnames/bind";
import styles from "./BoxChart.module.scss";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Media from "../Media/Media";
import GroupChart from "../GroupChart/GroupChart";
import images from "../../assets/playlistImg";
import RIGHT_ACTIONS from "../../const/RIGHT_ACTION";
import { Button } from "@mui/material";

const cx = classNames.bind(styles);

function BoxChart() {
  return (
    <div className={cx("chart-box")}>
      <div className={cx("box-header")}>
        <a href="/playlist">Việt Nam</a>
        <PlayArrowIcon fontSize="large" className={cx("btn-play")} />
      </div>
      <div className="list-item">
        <GroupChart
          author={"hahah"}
          name={"dasd"}
          img={images.bestfor8x}
          rank={1}
          right={RIGHT_ACTIONS.timeAction}
          className={"image-is40"}
        />
        <GroupChart
          author={"hahah"}
          name={"dasd"}
          img={images.bestfor8x}
          rank={1}
          right={RIGHT_ACTIONS.timeAction}
          className={"image-is40"}

        />
        <GroupChart
          author={"hahah"}
          name={"dasd"}
          img={images.bestfor8x}
          rank={1}
          right={RIGHT_ACTIONS.timeAction}
          className={"image-is40"}

        />
        <GroupChart
          author={"hahah"}
          name={"dasd"}
          img={images.bestfor8x}
          rank={1}
          right={RIGHT_ACTIONS.timeAction}
          className={"image-is40"}

        />
        <GroupChart
          author={"hahah"}
          name={"dasd"}
          img={images.bestfor8x}
          rank={1}
          right={RIGHT_ACTIONS.timeAction}
          className={"image-is40"}

        />
        <GroupChart
          author={"hahah"}
          name={"dasd"}
          img={images.bestfor8x}
          rank={1}
          right={RIGHT_ACTIONS.timeAction}
          className={"image-is40"}

        />
      </div>
      <div className={cx("is-center")}>
        <Button className={cx("button-more")}>Xem thêm</Button>
      </div>
    </div>
  );
}

export default BoxChart;
