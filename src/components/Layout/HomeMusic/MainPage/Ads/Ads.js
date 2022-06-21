import React from 'react'
import styles from "./Ads.module.scss";
import classNames from "classnames/bind";
import images from '../../../../../assets/images';
const cx = classNames.bind(styles);

function Ads() {
  return (
    <div className={cx('ads')}>
        <div className={cx('ads-zone')}>
            <img className={cx('img-ads')} src={images.bgads} alt='' />
        </div>
    </div>
  )
}

export default Ads