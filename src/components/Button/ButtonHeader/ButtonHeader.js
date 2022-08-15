import { forwardRef } from "react";

import styles from "./ButtonHeader.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from 'react-bootstrap-icons'
const cx = classNames.bind(styles);
const ButtonHeader = forwardRef((props, ref) => {
  const { iconSvg, icon, onClick, classNames,iconBS} = props; 
  let CompIcon = iconBS

  return (
    <button ref={ref} className={cx(classNames)} onClick={onClick} >
      {iconSvg && <img src={iconSvg} alt="" />}
      {icon && <FontAwesomeIcon className={cx("icon-btn")} icon={icon} />}
      {iconBS && <CompIcon className={cx("icon-btn")} />}
    </button>
  );
});

export default ButtonHeader;
