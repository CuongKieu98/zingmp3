import React from 'react'
import styles from "./Tab.module.scss";
import classNames from "classnames/bind";


const cx = classNames.bind(styles);
 
function Tab({data,className,onClick}) {
  return (
    <ul className={cx("tabs")}>
    {data.map((item,index) =>(
        <li key={index} className={cx("tab-item") + " " + cx(className)} onClick={onClick}>{item.value}</li>
    ))}
    </ul>
  )
}

export default Tab