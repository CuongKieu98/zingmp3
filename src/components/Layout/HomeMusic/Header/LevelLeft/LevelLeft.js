import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { ArrowLeft, ArrowRight, Search } from 'react-bootstrap-icons'
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import Tippy from "@tippyjs/react/headless";
import SUCCESS_LIST from "../../../../../const/SUCESS_LIST";
import LabelSong from "../../../../Label/LabelSong/LabelSong";
import styles from "../Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function LevelLeft() {
  const [isShow, setIsShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isColapse, setIsColapse] = useState("");

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };
  const onFocusInput = (isFocus) => {
    if (isFocus) {
      setIsColapse("is-copalse");
      setIsShow(true);
    } else {
      setIsColapse("");
      setIsShow(false);
    }
  };
  return (
    <div className={cx("level-left")}>
      <button className={cx("cnk-btn")}>
        <ArrowLeft  className={cx("icon") + " " + cx("is-back")} />
      </button>

      <button className={cx("cnk-btn")}>
      <ArrowRight  className={cx("icon") + " " + cx("is-next")} />
      </button>
      <form className={cx("search")}>
        <Tippy
          visible={isShow}
          onClickOutside={() => onFocusInput(false)}
          interactive
          render={(attrs) => (
            <ul className={cx("success-list")}>
              <div className={cx("success-list-contet")}>
                <div className={cx("search-title")}>Gợi ý kết quả</div>
                {SUCCESS_LIST.map((list) => (
                  <li
                    key={list.id}
                    className={cx("success-item-li") + " " + cx("success-item")}
                  >
                    <LabelSong
                      title={list.name}
                      img={list.img}
                      auths={list.author}
                    />
                  </li>
                ))}
              </div>
            </ul>
          )}
        >
          <div className={cx("search-container") + " " + cx(isColapse)}>
            <button className={cx("cnk-btn-search")}>
              <Search className={cx("icon-search")} />
            
            </button>
            <div className={cx("input-wrapper")}>
              <input
                ref={inputRef}
                type="text"
                className={cx("input-text")}
                placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
                onFocus={() => onFocusInput(true)}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            {searchValue.length > 0 && (
              <FontAwesomeIcon
                className={cx("icon") + " " + cx("icon-close")}
                icon={faXmarkCircle}
                onClick={handleClear}
              />
            )}
          </div>
        </Tippy>
      </form>
    </div>
  );
}

export default LevelLeft;
