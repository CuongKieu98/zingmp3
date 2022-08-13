import React from 'react'
import classNames from "classnames/bind";

import styles from "./CardInfo.module.scss";
import TextDisplay from '../Common/TextDisplay';

const cx = classNames.bind(styles);
function CardInfo() {
  return (
    <div className={cx("card-info")}>
        <TextDisplay className="title-wrapper" text={"Nhìn vè phía em"} />
        <h3 className={cx("subtitle")}>
            <a href="/">Đình dũng</a>
        </h3>
    </div>
  )
}

export default CardInfo