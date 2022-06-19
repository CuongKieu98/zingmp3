import React from "react";
import styles from "./MainPage.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import SliderShow from "./SliderShow/SliderShow";

const cx = classNames.bind(styles);

function MainPage() {
  return (
    <div className={cx("cnk-mainpage")}>
      <div className={cx("body-mainpage")}>
        <main className={cx("cnk-selection")}>
          <div className={cx("container-main")}>
            <div className={cx("container")}>
        
              <div className={cx("gallery")}>
                <div className={cx("gallery-container")}>
                  <div className={cx("cnk-gallery-prev")}>
                    <button className={cx("btn-prev")}>
                      <FontAwesomeIcon icon={faCircleLeft} />
                    </button>
                  </div>
                  <div className={cx("cnl-gallery-item")}>

                    <SliderShow />
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
