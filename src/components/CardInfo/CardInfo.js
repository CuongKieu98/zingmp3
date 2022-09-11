import React from "react";
import classNames from "classnames/bind";

import styles from "./CardInfo.module.scss";
import TextDisplay from "../Common/TextDisplay";
import { Skeleton } from "@mui/material";

const cx = classNames.bind(styles);
function CardInfo({ author, name, loading = false }) {
  return (
    <div className={cx("card-info")}>
      {loading ? (
        <Skeleton />
      ) : (
        <TextDisplay className="title-wrapper" text={name} />
      )}
      {loading ? (
        <Skeleton width={80} />
      ) : (
        <h3 className={cx("subtitle")}>
          <p>{author}</p>
        </h3>
      )}
    </div>
  );
}

export default CardInfo;
