import React from "react";

import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import * as Icon from "react-bootstrap-icons";
import Tippy from "@tippyjs/react";
const cx = classNames.bind(styles);

function Button({id, title, setIcon, className, placement = "top", onClick ,customIcon,disabled=false,show=""}) {
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
            id={id}
            className={cx("cnk-btn") + " " + cx(className) + " " + cx(show)}
            onClick={onClick}
            disabled={disabled}
          >
            <CompIcon className={cx("btn-icon") + " " + cx(customIcon)} />
          </button>
        </Tippy>
      ) : (
        <button
        id={id}
          className={cx("cnk-btn") + " " + cx(className) + " " + cx(show)}
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
