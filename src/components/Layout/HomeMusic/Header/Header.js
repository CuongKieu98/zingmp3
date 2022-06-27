import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import LevelLeft from "./LevelLeft/LevelLeft";
import LevelRight from "./LevelRight/LevelRight";

const cx = classNames.bind(styles);

function Header() {
  const [bgHeader,setBgHeader] = useState('');
  const [y,setY] = useState(window.scrollY)


 

  useEffect(() => {
    const changeBackground = () => {

    };
    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground,true);
  }, []);

  return (
    <header  className={cx("cnk-header")+ " " + cx(bgHeader)}>
      <div className={cx("level")}>
        <LevelLeft />
        <LevelRight />
      </div>
    </header>
  );
}

export default Header;
