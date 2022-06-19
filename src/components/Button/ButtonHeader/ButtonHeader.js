import {forwardRef} from "react";

import styles from "./ButtonHeader.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);
const ButtonHeader = forwardRef((props,ref) =>{
    const {iconSvg,icon,hfef,classNames} = props
  let Comp = "div";
  if (props.href) {
    Comp = "a";
  }

  return (
    <Comp 
        className={cx(classNames)}
        ref={ref}
        >
            <button>
              {iconSvg &&  <img src={iconSvg} alt="" />}
              {icon && <FontAwesomeIcon className={cx('icon-btn')} icon={icon}/>}
            </button>
    </Comp>
  );
});

export default ButtonHeader;
