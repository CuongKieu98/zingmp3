import { useRef } from "react";
import styles from "./MainPage.module.scss";
import classNames from "classnames/bind";

import SliderShow from "./SliderShow/SliderShow";
import Recently from "./PlayListRecently/Recently";
import Random from "./PlayListRandom/Random";
import { LIST_RANDOM,LIST_TODAY,LIST_CORNER ,LIST_RADIO} from "../../../../const/PLAYLIST";

const cx = classNames.bind(styles);

function MainPage() {
  return (
    <div className={cx("cnk-mainpage")}>
      <div className={cx("body-mainpage")}>
        <main className={cx("cnk-selection")}>
          <div className={cx("cnk-container")}>
            <SliderShow />
            <Recently />
            <Random playLists={LIST_RANDOM} title={"Có thể bạn muốn nghe"}/>
            <Random playLists={LIST_TODAY} title={"Lựa chọn hôm nay"}/>
            <Random playLists={LIST_CORNER} title={"XONE's CORNER"} />
            <Random playLists={LIST_RADIO} title={"dsd"} isRadio={true} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
