import React from "react";

import styles from "../Header.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import ITEM_HEADER_RIGHT from "../../../../../const/ITEM_HEADER_RIGHT";
import ButtonHeader from "../../../../Button/ButtonHeader/ButtonHeader";

const cx = classNames.bind(styles);
function LevelRight() {
  return (
    <div className={cx("level-right")}>
      {ITEM_HEADER_RIGHT.map((item) => (
 
          <Tippy key={item.id} content={item.title}>
            <ButtonHeader
              href={item.to}
              icon={item.icon}
              iconSvg={item.iconSvg}
              classNames={"setting-item"}
            />
          </Tippy>
       
      ))}
    </div>
  );
}

export default LevelRight;
