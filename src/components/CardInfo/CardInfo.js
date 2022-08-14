import React from 'react'
import classNames from "classnames/bind";

import styles from "./CardInfo.module.scss";
import TextDisplay from '../Common/TextDisplay';

const cx = classNames.bind(styles);
function CardInfo({ author, name, img }) {
  return (
    <div className={cx("card-info")}>
        <TextDisplay className="title-wrapper" text={name} />
        <h3 className={cx("subtitle")}>
            <a href="/">{author}</a>
        </h3>
    </div>
  )
}

export default CardInfo