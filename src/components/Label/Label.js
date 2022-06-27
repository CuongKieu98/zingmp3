import React from "react";
import { Link } from "react-router-dom";
import styles from "./Label.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";


const cx = classNames.bind(styles);

function Label({ to, href, title, icon, live,iconRight }) {
  let Component = Link;
  if (to) {
    Component = Link;
  } else if (href) {
    Component = "a";
  }
  let CompIcon = icon
  return (
    <Component className={cx("label")} to={to} href={href}>
      <CompIcon className={cx("label-icon")} />
      {/* <FontAwesomeIcon className={cx('label-icon')} icon={icon} /> */}
      <span className={cx('hide-when-mobile')}>{title}</span>
      {live && (
        <figure className={cx("label-tag")}>
          <img src={live} alt="" />
        </figure>
      )}
      {!iconRight &&
      <button className={cx('shuffer-icon')}>
        <FontAwesomeIcon className={cx('label-icon-shuffle')} icon={faCirclePlay} />
      </button>
      }
    </Component>
  );
}

export default Label;
