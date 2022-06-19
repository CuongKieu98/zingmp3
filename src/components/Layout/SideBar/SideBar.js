import React from "react";
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";



import "tippy.js/dist/tippy.css"; // optional
import SideBarMain from "./SideBarMain/SideBarMain";
import SideBarMiddle from "./SideBarMiddle/SideBarMiddle";

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
        <SideBarMain />
        <div className={cx('cnk-sidebar-divide')}>
        </div>
        <SideBarMiddle />
      </div>
    </aside>
  );
}

export default SideBar;
