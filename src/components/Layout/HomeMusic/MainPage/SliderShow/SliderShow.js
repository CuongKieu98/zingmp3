import { useEffect, useState, useRef } from "react";
import styles from "./SliderShow.module.scss";
import classNames from "classnames/bind";

import ITEM_SLIDER from "../../../../../const/ITEM_SLIDER";

import * as Icon from "react-bootstrap-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const cx = classNames.bind(styles);



function SliderShow() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,

        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,  
          infinite: true,

        },
      },
    ],

  };

  return (
    <div className={cx("slideshow")}>
      <div className={cx("slideshow-slider")}>
        <div className={cx("slide-container")}>
          <Slider {...settings}>
            {ITEM_SLIDER.map((item, index) => {
              return (
                <div className={cx("slide")} key={item.id}>
                  <div className={cx("cnk-card")}>
                    <a href={item.href}>
                      <div className={cx("cnk-card-img")}>
                        <figure className={cx("img-card-48")}>
                          <img
                            className={cx("img-tranform")}
                            src={item.slider}
                            alt=""
                          />
                        </figure>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SliderShow;
