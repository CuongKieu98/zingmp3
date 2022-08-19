import React from 'react'
import Label from "../../../Label/Label";
import ITEM_SIDEBAR_MAIN from "../../../../const/ITEM_SIDEBAR_MAIN";
import styles from "../SideBar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function SideBarMain() {
  let currPath = window.location.pathname;
  return (
    <nav className={cx("cnk-navbar") + " " + cx("cnk-navbar-main")}>
    <ul className={cx("cnk-navbar-menu")}>
      {ITEM_SIDEBAR_MAIN.map((item) => (
        <li
          key={item.id}
          className={cx("cnk-navbar-item") + " " + (currPath === item.to ? cx("active") : "")}
          title={item.text}
        >
          <Label
            title={item.text}
            icon={item.icon}
            live={item.live}
            to={item.to}
            iconRight={item.iconRight}
          />
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default SideBarMain