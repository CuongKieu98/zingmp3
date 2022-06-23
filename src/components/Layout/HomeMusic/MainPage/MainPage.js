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
  LIST_EVENT,
} from "../../../../const/PLAYLIST";
import playlistImg from "../../../../assets/playlistImg";
import images from "../../../../assets/images";

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
            <Random playLists={LIST_EVENT} isEvent={true} title={"Sự kiện"} />
            {/* partner */}
            <div className={cx('cnk-partner')}>
              <h3 className={cx('title-partner')}>
                <span>Đối tác âm nhạc</span>
              </h3>
              <div className={cx('colum-partner')}>
                <div className={cx('partner-item')}>
                  <div className={cx('content-partner')}>
                    <figure className={cx('pn-img')}>
                      <img className={cx("img")} src={images.pn1} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx('partner-item')}>
                  <div className={cx('content-partner')}>
                    <figure className={cx('pn-img')}>
                      <img  className={cx("img")} src={images.pn2} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx('partner-item')}>
                  <div className={cx('content-partner')}>
                    <figure className={cx('pn-img')}>
                      <img  className={cx("img")} src={images.pn3} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx('partner-item')}>
                  <div className={cx('content-partner')}>
                    <figure className={cx('pn-img')}>
                      <img  className={cx("img")} src={images.pn4} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx('partner-item')}>
                  <div className={cx('content-partner')}>
                    <figure className={cx('pn-img')}>
                      <img  className={cx("img")} src={images.pn5} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx('partner-item')}>
                  <div className={cx('content-partner')}>
                    <figure className={cx('pn-img')}>
                      <img  className={cx("img")} src={images.pn6} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx('partner-item')}>
                  <div className={cx('content-partner')}>
                    <figure className={cx('pn-img')}>
                      <img  className={cx("img")} src={images.pn7} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx('partner-item')}>
                  <div className={cx('content-partner')}>
                    <figure className={cx('pn-img')}>
                      <img  className={cx("img")} src={images.pn8} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
