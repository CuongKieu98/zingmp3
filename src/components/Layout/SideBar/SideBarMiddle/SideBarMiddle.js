import React from "react";
import Label from "../../../Label/Label";
import styles from "../SideBar.module.scss";
import classNames from "classnames/bind";
import ITEM_SIDEBAR_MIDDLE from "../../../../const/ITEM_SIDEBAR_MIDDLE";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import "tippy.js/dist/tippy.css"; // optional
import Tippy from "@tippyjs/react";
import LabelLib from "../../../Label/LabelLib";
import ITEM_LIBRARY from "../../../../const/ITEM_LIBRARY";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function SideBarMiddle() {
  return (
    <>
      <div className={cx("cnk-sidebar-middle")}>
        <div className={cx("cnk-sidebar-scrollbar")}>
          <nav className={cx("cnk-navbar") + " " + cx("cnk-navbar-main")}>
            <ul className={cx("cnk-navbar-menu")}>
              {ITEM_SIDEBAR_MIDDLE.map((item) => (
                <li
                  key={item.id}
                  className={cx("cnk-navbar-item") + " " + cx(item.active)}
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
          <div className={cx("vip-banner-sidebar")}>
            <div className={cx("text")}>
              Nghe nhạc không quảng cáo cùng kho nhạc VIP
            </div>
            <a
              className={cx("banner")}
              href={
                "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=sidebar"
              }
              target="_blank"
              rel="noreferrer"
            >
              NÂNG CẤP VIP
            </a>
          </div>
          <nav className={cx("cnk-navbar") + " " + cx("cnk-navbar-my-music")}>
            <div className={cx("title-middle")}>
              THƯ VIỆN
              <Tippy placement="top" content="Chỉnh sửa">
                <button className={cx("edit-middle")}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </Tippy>
            </div>
            <ul className={cx("cnk-navbar-menu")}>
              {ITEM_LIBRARY.map((item) => (
                <li
                  key={item.id}
                  className={cx("cnk-navbar-item") + " " + cx(item.active)}
                  title={item.text}
                >
                  <LabelLib
                    title={item.text}
                    imgIcon={item.icon}
                    to={item.to}
                    iconRight={item.iconRight}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      
      </div>
      <div className={cx("cnk-addplaylist-sidebar")}>
        <button className={cx("btn-sidebar-add")}>
          <FontAwesomeIcon icon={faPlus} className={cx("icon-add-sidebar")} />
          <span>Tạo playlist mới</span>
        </button>
      </div>
    </>
  );
}

export default SideBarMiddle;
