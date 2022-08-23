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
  customIcon,
  disabled=false,
}) {
  let IconComp = icon;
  return (
    <>
      {tooltip ? (
        <Tooltip title={tooltip} arrow placement={placement}>
          <IconButton disabled={disabled} onClick={onClick} className={cx("button") + " " + cx(className)}>
            <IconComp className={cx("icon") + " " + cx(customIcon)} />
          </IconButton>
        </Tooltip>
      ) : (
        <IconButton disabled={disabled} onClick={onClick} className={cx("button") + " " + cx(className)}>
          <IconComp className={cx("icon") + " " + cx(customIcon)} />
        </IconButton>
      )}
    </>
  );
}

export default Button;
