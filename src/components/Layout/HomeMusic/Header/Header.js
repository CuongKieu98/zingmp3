import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import LevelLeft from "./LevelLeft/LevelLeft";
import LevelRight from "./LevelRight/LevelRight";

const cx = classNames.bind(styles);

function Header() {
  const [bgHeader,setBgHeader] = useState('');
  const [y,setY] = useState(window.scrollY)
  const headerRef = useRef(null)
console.log(document.scrollingElement.scrollTop ||document.documentElement.scrollTop );

  useEffect(() => {
    //ẩn background header khi cuộn chuột
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  },[]);


  return (
    <header  className={cx("cnk-header")} ref={headerRef}>
      <div className={cx("level")}>
        <LevelLeft />
        <LevelRight />
      </div>
    </header>
  );
}

export default Header;
