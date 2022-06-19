import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import LevelLeft from "./LevelLeft/LevelLeft";
import LevelRight from "./LevelRight/LevelRight";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("cnk-header")}>
      <div className={cx("level")}>
        <LevelLeft />
        <LevelRight />
      </div>
    </header>
  );
}

export default Header;
