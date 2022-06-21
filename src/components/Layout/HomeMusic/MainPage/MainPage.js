import { useRef } from "react";
import styles from "./MainPage.module.scss";
import classNames from "classnames/bind";

import SliderShow from "./SliderShow/SliderShow";
import Recently from "./PlayListRecently/Recently";
import Random from "./PlayListRandom/Random";
import { LIST_RANDOM } from "../../../../const/PLAYLIST";

const cx = classNames.bind(styles);

function MainPage() {
  return (
    <div className={cx("cnk-mainpage")}>
      <div className={cx("body-mainpage")}>
        <main className={cx("cnk-selection")}>
          <div className={cx("cnk-container")}>
            <SliderShow />
            <Recently />
            <Random playLists={LIST_RANDOM}/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
