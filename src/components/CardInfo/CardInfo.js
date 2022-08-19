import React from 'react'
import classNames from "classnames/bind";

import styles from "./CardInfo.module.scss";
import TextDisplay from '../Common/TextDisplay';

const cx = classNames.bind(styles);
function CardInfo({ author, name }) {
  return (
    <div className={cx("card-info")}>
        <TextDisplay className="title-wrapper" text={name} />
        <h3 className={cx("subtitle")}>
            <p>{author}</p>
        </h3>
    </div>
  )
}

export default CardInfo