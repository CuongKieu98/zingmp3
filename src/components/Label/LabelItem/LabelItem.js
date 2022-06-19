import React from "react";

import styles from "./LabelItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function LabelItem({ href, icon, title }) {
  let Comp = "a";
  if (href) {
    Comp = "a";
  } else {
    Comp = "div";
  }
  return (
    <Comp
      href={href}
      className={cx("label-btn")}
      {...(!!href ? { target: "_blank" } : {})}
    >
      <span className={cx("btn-label")}>
        <FontAwesomeIcon className={cx("icon-setting")} icon={icon} />
        <span>{title}</span>
        {Comp !== "a" && (
          <FontAwesomeIcon
            icon={faCircleRight}
            className={cx("icon-setting")}
          />
        )}
      </span>
    </Comp>
  );
}

export default LabelItem;
