import React from "react";
import { Link } from "react-router-dom";
import styles from "./Label.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const cx = classNames.bind(styles);

function Label({ to, href, title, icon, live }) {
  let Component = Link;
  if (to) {
    Component = Link;
  } else if (href) {
    Component = "a";
  }
  return (
    <Component className={cx("label")} to={to} href={href}>
      <FontAwesomeIcon className={cx("label-icon")} icon={icon} />
      <span>{title}</span>
      {live && (
        <figure className={cx("label-tag")}>
          <img src={live} alt="" />
        </figure>
      )}
    </Component>
  );
}

export default Label;
