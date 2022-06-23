import React, { useRef } from "react";
import styles from "./Random.module.scss";
import classNames from "classnames/bind";
import Card from "../../../../Card/Card";
import Radio from "../../../../Radio/Radio";
import * as Icon from "react-bootstrap-icons";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import CardSinger from "../../../../Card/Singer/Singer";
import Event from "../../../../Card/Event/Event";

const cx = classNames.bind(styles);
const Random = ({
  playLists,
  title = "",
  isRadio,
  isMedia,
  content = {},
  isCardNm,
  isSinger,
  isEvent,
}) => {
  const refSlider = useRef();
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  const RenderTitle = () => {
    if (isMedia ) {
      return (
        <div className={cx("media-header")}>
          <div className={cx("media-left")}>
            <Link to={content.href}>
              <div className={cx("media-img")}>
                <figure className={cx("img")}>
                  <img src={content.avatar} alt="" title={content.title} />
                </figure>
              </div>
            </Link>
          </div>
          <div className={cx("media-content")}>
            <h3 className={cx("subtitle")}>{content.subTitle}</h3>
            <h3 className={cx("title")}>
              <Link to={content.href}>{content.title}</Link>
            </h3>
          </div>
        </div>
      );
    } else {
      return (
        <h3 className="cnk-playlist-title">
          {title}
          {(isRadio || isEvent) && (
            <div className={cx("cnk-discovery-btn")}>
              <Icon.ChevronLeft
                className={cx("cnk-btn-arrow")}
                onClick={() => refSlider?.current?.slickPrev()}
              />
              <Icon.ChevronRight
                className={cx("cnk-btn-arrow")}
                onClick={() => refSlider?.current?.slickNext()}
              />
            </div>
          )}
        </h3>
      );
    }
  };
  const RenderCard = () => {
    if (isRadio) {
      return (
        <Slider ref={refSlider} {...settings}>
          {playLists.map((list) => (
            <div
              key={list.id}
              className={cx("cnk-playlist-item") + " " + cx("is14")}
            >
              <div className={cx("cnk-playlist-normal")}>
                <Radio
                  author={list.Author}
                  content={list.content}
                  href={list.href}
                  img={list.img}
                  subTiltle={list.subTiltle}
                  imgHost={list.imgHost}
                />
              </div>
            </div>
          ))}
        </Slider>
      );
    } else if (isCardNm || isMedia) {
      return playLists.map((list) => (
        <div
          key={list.id}
          className={cx("cnk-playlist-item") + " " + cx("is20")}
        >
          <div className={cx("cnk-playlist-normal")}>
            <Card
              author={list.Author}
              content={list.content}
              href={list.href}
              img={list.img}
              subTiltle={list.subTiltle}
            />
          </div>
        </div>
      ));
    } else if (isSinger) {
      return (
        <Slider ref={refSlider} {...settings} autoplay={true} autoplaySpeed={5000}>
          {playLists.map((list) => (
            <div
              key={list.id}
              className={cx("cnk-playlist-item") + " " + cx("is14")}
            >
              <div className={cx("cnk-playlist-normal")}>
                <CardSinger href={list.href} img={list.img} />
              </div>
            </div>
          ))}
        </Slider>
      );
    }
    else if(isEvent){
      return (
        <Slider ref={refSlider} slidesToShow={3} slidesToScroll={3} autoplay={false} >
        {playLists.map((list) => (
          <div
            key={list.id}
            className={cx("cnk-playlist-item") + " " + cx("is33")}
          >
            <div className={cx("cnk-playlist-normal")}>
              <Event href={list.href} img={list.img} content={list.content} title={list.title}/>
            </div>
          </div>
        ))}
     </Slider>
      )
    }
  };

  return (
    <div className="cnk-playlist">
      <div className="cnk-playlist-container">
        <React.Fragment>
          <RenderTitle />
        </React.Fragment>
        <div className="cnk-playlist-wapper">
          <div className={cx("cnk-playlist-wp")}>
            <div className={cx("cnk-playlist-wp-container")}>
              <RenderCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random;
