import React from "react";

import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import * as Icon from "react-bootstrap-icons";
import Tippy from "@tippyjs/react";
const cx = classNames.bind(styles);

function Button({ title, setIcon, className ,placement = 'top',onClick}) {
    let CompIcon = setIcon
    const titleTooltip = (
        <span className={cx('cnk-content')}>{title}</span>
    )
  return (
    <Tippy content={titleTooltip} placement={placement} duration={[0,500]} flip >
      <button className={cx('cnk-btn')+ " " +cx(className) } onClick={onClick}>
        <CompIcon className={cx('btn-icon')}/> 
      </button>
    </Tippy>
  );
}

export default Button;
