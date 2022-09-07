import { useRef, useState, useEffect } from "react";

import { ArrowLeft, ArrowRight, Search, X, XLg } from "react-bootstrap-icons";
import Tippy from "@tippyjs/react/headless";
import SUCCESS_LIST from "../../../../../const/SUCESS_LIST";
import LabelSong from "../../../../Label/LabelSong/LabelSong";
import styles from "../Header.module.scss";
import classNames from "classnames/bind";
import { useDebounce } from "~/hooks";
import { SearchData } from "../../../../../utils/apiMusics";
import images from "../../../../../assets/images";
import Media from "../../../../Media/Media";

const cx = classNames.bind(styles);
function LevelLeft() {
  const [isShow, setIsShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isColapse, setIsColapse] = useState("");
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 800);

  const inputRef = useRef();
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    SearchData(debounced)
      .then((res) => {
        setSearchResult(res.data.songs.slice(0, 8));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [debounced]);

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
        <ArrowLeft className={cx("icon") + " " + cx("is-back")} />
      </button>

      <button className={cx("cnk-btn")}>
        <ArrowRight className={cx("icon") + " " + cx("is-next")} />
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
                {searchResult?.map((list) => (
                  <li
                    key={list.encodeId}
                    className={cx("success-item-li") + " " + cx("success-item")}
                  >
                    <Media
                      code={list.encodeId}
                      name={list.title}
                      img={list.thumbnail}
                      author={list.artistsNames}
                      className={"image-is40"}
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
            {searchValue.length > 0 &&
              (loading ? (
                <img
                  src={images.spiner}
                  alt=""
                  className={cx("icon-loading")}
                />
              ) : (
                <XLg
                  className={cx("icon") + " " + cx("icon-close")}
                  onClick={handleClear}
                />
              ))}
          </div>
        </Tippy>
      </form>
    </div>
  );
}

export default LevelLeft;
