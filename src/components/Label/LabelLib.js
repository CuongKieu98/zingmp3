import React from "react";
import { Link } from "react-router-dom";
import styles from "./Label.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";


const cx = classNames.bind(styles);

function LabelLib({ to, href, title, imgIcon, live,iconRight }) {
  let Component = Link;
  if (to) {
    Component = Link;
  } else if (href) {
    Component = "a";
  }
  return (
    <Component className={cx("label")} to={to} href={href}>
      <i className={cx('label-icon')}>
        <img src={imgIcon} alt=''/>
      </i>
      <span className={cx('label-lib-text')}>{title}</span>
      {!iconRight &&
      <button className={cx('shuffer-icon')}>
        <FontAwesomeIcon className={cx('label-icon-shuffle')} icon={faCirclePlay} />
      </button>
      }
    </Component>
  );
}

export default LabelLib;
