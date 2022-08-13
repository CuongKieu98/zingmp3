import React from 'react';
import classNames from "classnames/bind";


import styles from "../../styles/TextDisplay.module.scss"

const cx = classNames.bind(styles);

function TextDisplay({text,className}) {
  return (
    <div className={cx(className)}>
        <span className={cx("title")}>
            <span>{text}</span>
        </span>
    </div>
  )
}

export default TextDisplay