import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { IconButton, Tooltip } from "@mui/material";

const cx = classNames.bind(styles);
function Button({
  icon,
  tooltip,
  onClick,
  placement = "top",
  className,
  disabled=false,
}) {
  let IconComp = icon;
  return (
    <>
      {tooltip ? (
        <Tooltip title={tooltip} arrow placement={placement}>
          <IconButton disabled={disabled} onClick={onClick} className={cx("button")}>
            <IconComp className={cx("icon") + " " + cx(className)} />
          </IconButton>
        </Tooltip>
      ) : (
        <IconButton disabled={disabled} onClick={onClick} className={cx("button")}>
          <IconComp className={cx("icon") + " " + cx(className)} />
        </IconButton>
      )}
    </>
  );
}

export default Button;
