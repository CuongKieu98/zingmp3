import React from "react";
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import Label from "../../Label/Label";
import ITEM_SIDEBAR_MAIN from "../../../const/ITEM_SIDEBAR_MAIN";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <aside className={cx("cnk-sidebar")}>
      <div className={cx("cnk-sidebar-wrap")}>
        <nav className={cx("cnk-navbar")}>
          <div className={cx("cnk-navbar-brand")}>
            <div className={cx("cnk-navbar-item")}>
              <button className={cx("cnk-btn-button")} tabIndex={0}>
                <div className={cx("cnk-logo")}></div>
              </button>
            </div>
          </div>
        </nav>
        <nav className={cx("cnk-navbar") + "" + cx("cnk-navbar-main")}>
          <ul className={cx("cnk-navbar-menu")}>
            {ITEM_SIDEBAR_MAIN.map((item) => (
              <Tippy content={item.text} placement='right' key={item.id}>
                <li className={cx("cnk-navbar-item")}>
                  <Label
                    title={item.text}
                    icon={item.icon}
                    live={item.live}
                    to={item.to}
                  />
                </li>
              </Tippy>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default SideBar;
