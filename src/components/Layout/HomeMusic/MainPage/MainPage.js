import { useRef } from "react";
import styles from "./MainPage.module.scss";
import classNames from "classnames/bind";

import SliderShow from "./SliderShow/SliderShow";
import Random from "./PlayListRandom/Random";
import {
  LIST_RANDOM,
  LIST_TODAY,
  LIST_CORNER,
  LIST_RADIO,
  LIST_FOR_FAN,
  LIST_NEW_EVERYDAY,
  LIST_SINGER,
} from "../../../../const/PLAYLIST";
import playlistImg from "../../../../assets/playlistImg";

const cx = classNames.bind(styles);

function MainPage() {
  return (
    <div className={cx("cnk-mainpage")}>
      <div className={cx("body-mainpage")}>
        <main className={cx("cnk-selection")}>
          <div className={cx("cnk-container")}>
            <SliderShow />
            <Random playLists={LIST_RANDOM} title={"Có thể bạn muốn nghe"} isCardNm={true} />
            <Random playLists={LIST_TODAY} title={"Lựa chọn hôm nay"} isCardNm={true}  />
            <Random playLists={LIST_CORNER} title={"XONE's CORNER"} isCardNm={true} />
            <Random
              playLists={LIST_RADIO}
              title={"Radio nổi bật"}
              isRadio={true}
            />
            <Random
              playLists={LIST_FOR_FAN}
              isMedia={true}
              content={{
                title: "Miu Lê",
                subTitle: "DÀNH CHO FAN",
                avatar: playlistImg.miule2,
                href: "/Miu-le",
              }}
            />
            <Random playLists={LIST_NEW_EVERYDAY} title={"Nhạc mới mỗi ngày"} isCardNm={true} />
            <Random playLists={LIST_SINGER} isSinger={true} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
