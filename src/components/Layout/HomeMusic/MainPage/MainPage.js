import { useRef, useEffect } from "react";
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
import Chart from "../../../Chart/Chart";
import { useDispatch, useSelector } from "react-redux";
import { addPlaylist } from "../../../../redux/actions/actions";
import { addPlaylistSelector } from "../../../../redux/selectors/selectors";
import PlayList from "../../../PlayList/PlayList";

const cx = classNames.bind(styles);

function MainPage() {
  const dispatch = useDispatch();
  const handleAddPlaylist = () => {
    dispatch(
      addPlaylist([
        {
          id: "ZZDFBFD8",
          title: "Em Nên Dừng Lại",
          name: "Em Nên Dừng Lại",
          artists_names: "Khang Việt",
          code: "kmcmyZkVDJxdxmmymtbHkHykghmQQvzHX",
          audioSrc:
            "https://vnso-zn-23-tf-mp3-s1-m-zmp3.zmdcdn.me/b20d982d446cad32f47d/6809065341606619327?authen=exp=1660723087~acl=/b20d982d446cad32f47d/*~hmac=5ae7d94ee8cba372f00f91c0b625d9bd&fs=MTY2MDU1MDI4NzMxN3x3ZWJWNHwxNC4xODUdUngMTI3Ljg5",
          duration: "368",
          img: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/0/c/8/b0c8399ab4bf53e7eb1285ee1e8aaa32.jpg?fs=MTY2MDU1MDI4NzMxNnx3ZWJWNHwxNC4xODUdUngMTI3Ljg5",
          rank_status: "stand",
          position: 2,
        },
      ])
    );
  };

  return (
    <div className={cx("cnk-mainpage")}>
      <div className={cx("body-mainpage")}>
        <main className={cx("cnk-selection")}>
          <div className={cx("cnk-container")}>
            <SliderShow />
            <PlayList playLists={LIST_RANDOM} title={"Có thể bạn muốn nghe"} />
            <PlayList playLists={LIST_TODAY} title={"Lựa chọn hôm nay"} />
            <PlayList playLists={LIST_CORNER} title={"XONE's CORNER"} />

            <Chart className={"mgt-30"} />
            <Random
              playLists={LIST_RADIO}
              title={"Radio nổi bật"}
              isRadio={true}
            />
            <PlayList
              playLists={LIST_FOR_FAN}
              title={"DÀNH CHO FAN"}
              content={{
                title: "Miu Lê",
                subTitle: "DÀNH CHO FAN",
                avatar: playlistImg.miule2,
                href: "/Miu-le",
              }}
            />
            <PlayList
              playLists={LIST_NEW_EVERYDAY}
              title={"Nhạc mới mỗi ngày"}
            />
            <Random playLists={LIST_SINGER} isSinger={true} />
            <Random playLists={LIST_EVENT} isEvent={true} title={"Sự kiện"} />
            {/* partner */}
            <footer className={cx("cnk-partner")}>
              <h3 className={cx("title-partner")}>
                <span>Đối tác âm nhạc</span>
              </h3>
              <div className={cx("colum-partner")}>
                <div className={cx("partner-item")}>
                  <div className={cx("content-partner")}>
                    <figure className={cx("pn-img")}>
                      <img className={cx("img")} src={images.pn1} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx("partner-item")}>
                  <div className={cx("content-partner")}>
                    <figure className={cx("pn-img")}>
                      <img className={cx("img")} src={images.pn2} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx("partner-item")}>
                  <div className={cx("content-partner")}>
                    <figure className={cx("pn-img")}>
                      <img className={cx("img")} src={images.pn3} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx("partner-item")}>
                  <div className={cx("content-partner")}>
                    <figure className={cx("pn-img")}>
                      <img className={cx("img")} src={images.pn4} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx("partner-item")}>
                  <div className={cx("content-partner")}>
                    <figure className={cx("pn-img")}>
                      <img className={cx("img")} src={images.pn5} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx("partner-item")}>
                  <div className={cx("content-partner")}>
                    <figure className={cx("pn-img")}>
                      <img className={cx("img")} src={images.pn6} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx("partner-item")}>
                  <div className={cx("content-partner")}>
                    <figure className={cx("pn-img")}>
                      <img className={cx("img")} src={images.pn7} alt="" />
                    </figure>
                  </div>
                </div>
                <div className={cx("partner-item")}>
                  <div className={cx("content-partner")}>
                    <figure className={cx("pn-img")}>
                      <img className={cx("img")} src={images.pn8} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
