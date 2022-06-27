import { useState } from "react";

import styles from "../Header.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";

import ButtonHeader from "../../../../Button/ButtonHeader/ButtonHeader";
import images from "../../../../../assets/images";

import { faChrome, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faCircleUp, faUser } from "@fortawesome/free-regular-svg-icons";
import ITEM_SETTING_HEADER from "../../../../../const/ITEM_SETTING_HEADER";
import LabelItem from "../../../../Label/LabelItem/LabelItem";
import ITEM_SETTING_FOOTER from "../../../../../const/ITEM_SETTING_FOOTER";
import {
  ITEM_LOGIN_USER,
  FOOTER_ITEM,
} from "../../../../../const/ITEM_LOGIN_USER";
import * as Icon from "react-bootstrap-icons";
const cx = classNames.bind(styles);
function LevelRight() {
  const [isShowSetting, setIsShowSetting] = useState(false);
  const [isShowInfoUser, setShowInfoUser] = useState(false);
  return (
    <div className={cx("level-right")}>
      <div className={cx("setting-item")}>
        <Tippy content="Chủ đề">
          <ButtonHeader iconSvg={images.them} />
        </Tippy>
      </div>
      <a
        className={cx("setting-item")}
        href={
          "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=icon-header"
        }
        target="_blank"
        rel="noreferrer"
      >
        <Tippy content="Nâng cấp VIP">
          <ButtonHeader iconBS={Icon.Badge8k} />
        </Tippy>
      </a>
      <div className={cx("setting-item")}>
        <Tippy content="Tải lên">
          <ButtonHeader iconBS={Icon.Upload} />
        </Tippy>
      </div>

      <div className={cx("setting-item")}>
        <Tippy content="Cài đặt">
          <HeadlessTippy
            interactive
            visible={isShowSetting}
            onClickOutside={() => setIsShowSetting(false)}
            placement="bottom-end"
            render={(attrs) => (
              <div className={cx("menu-setting")} tabIndex="-1" {...attrs}>
                <ul className={cx("menu-list")}>
                  {ITEM_SETTING_HEADER.map((item) => (
                    <li key={item.id} className={cx("li-header")}>
                      <LabelItem icon={item.icon} title={item.title} children={item.children}/>
                    </li>
                  ))}
                </ul>
                <footer className={cx("setting-footer")}>
                  <ul className={cx("menu-list")}>
                    {ITEM_SETTING_FOOTER.map((item) => (
                      <li key={item.id} className={cx("li-footer")}>
                        <LabelItem icon={item.icon} title={item.title} />
                      </li>
                    ))}
                  </ul>
                </footer>
              </div>
            )}
          >
            <ButtonHeader
              iconBS={Icon.Gear}
              onClick={() => setIsShowSetting(!isShowSetting)}
            />
          </HeadlessTippy>
        </Tippy>
      </div>

      <div className={cx("setting-item")}>
        <Tippy content="Thông tin">
          <HeadlessTippy
            interactive
            visible={isShowInfoUser}
            onClickOutside={() => setShowInfoUser(false)}
            placement="bottom-end"
            render={(attrs) => (
              <div className={cx("menu-setting")} tabIndex="-1" {...attrs}>
                <ul className={cx("menu-list")}>
                  {ITEM_LOGIN_USER.map((item) => (
                    <li key={item.id} className={cx("li-header")}>
                      <LabelItem
                        icon={item.icon}
                        title={item.title}
                        href={item.href}
                      />
                    </li>
                  ))}
                </ul>
                <footer className={cx("setting-footer")}>
                  <ul className={cx("menu-list")}>
                    {FOOTER_ITEM.map((item) => (
                      <li key={item.id} className={cx("li-footer")}>
                        <LabelItem icon={item.icon} title={item.title} />
                      </li>
                    ))}
                  </ul>
                </footer>
              </div>
            )}
          >
            <ButtonHeader
              icon={faUser}
              onClick={() => setShowInfoUser(!isShowInfoUser)}
            />
          </HeadlessTippy>
        </Tippy>
      </div>
      {/* {ITEM_HEADER_RIGHT.map((item) => (
        //setup tooltip
        <HeadlessTippy>


        
        <Tippy key={item.id} content={item.title}>
          <ButtonHeader
            href={item.to}
            icon={item.icon}
            iconSvg={item.iconSvg}
            classNames={"setting-item"}
          />
        </Tippy>
        </HeadlessTippy>
      ))} */}
    </div>
  );
}

export default LevelRight;
