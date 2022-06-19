import { useEffect, useState, useRef } from "react";
import styles from "./SliderShow.module.scss";
import classNames from "classnames/bind";
import ITEM_SLIDER from "../../../../../const/ITEM_SLIDER";

const cx = classNames.bind(styles);
const colors = ["#ed2b91", "#6b3483", "#000", "#fff"];
const delay = 2500;
function SliderShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className={cx("slideshow")}>
      <div
        className={cx("slideshowSlider")}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {ITEM_SLIDER.map((item, index) => (
          <div className={cx("slide")} key={item.id}>
            <div className={cx("cnk-card")}>
              <a
                title="hahahah"
                href={item.href}
              >
                <div className={cx("cnk-card-img")}>
                  <figure className={cx("img-card-48")}>
                    <img
                      className={cx("img-tranform")}
                      src={item.slider}
                      alt=""
                    />
                  </figure>
                </div>
                <div className={cx("cnk-card-content")}>
                  <div className={cx("title-card")}>{item.text}</div>
                  <h3 className={cx("subtitle-card")}>hihihi</h3>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderShow;
