import React from "react";

import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import * as Icon from "react-bootstrap-icons";
import Tippy from "@tippyjs/react";
const cx = classNames.bind(styles);

function Button({ title, setIcon, className, placement = "top", onClick ,customIcon,disabled=false}) {
  let CompIcon = setIcon;
  const titleTooltip = <span className={cx("cnk-content")}>{title}</span>;
  return (
    <>
      {title ? (
        <Tippy
          content={titleTooltip}
          placement={placement}
          duration={[0, 500]}
          flip
        >
          <button
            className={cx("cnk-btn") + " " + cx(className)}
            onClick={onClick}
            disabled={disabled}
          >
            <CompIcon className={cx("btn-icon") + " " + cx(customIcon)} />
          </button>
        </Tippy>
      ) : (
        <button
          className={cx("cnk-btn") + " " + cx(className)}
          onClick={onClick}
          disabled={disabled}
        >
          <CompIcon className={cx("btn-icon")+ " " + cx(customIcon)} />
        </button>
      )}
    </>
  );
}

export default Button;
