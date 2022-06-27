import React from "react";

import styles from "./LabelItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import { ChevronRight, Icon123 } from "react-bootstrap-icons";

const cx = classNames.bind(styles);

function LabelItem({ href, icon, title,children }) {
  let Comp = "a";
  if (href) {
    Comp = "a";
  } else {
    Comp = "div";
  }
  let CompIcon = icon
  return (
    <Comp
      href={href}
      className={cx("label-btn")}
      {...(!!href ? { target: "_blank" } : {})}
    >
      <span className={cx("btn-label")}>
        <CompIcon className={cx("icon-setting")} />
        <span>{title}</span>
        {(Comp !== "a" && children) && (
          <ChevronRight  className={cx("icon-setting")}/>
        )}
      </span>
    </Comp>
  );
}

export default LabelItem;
