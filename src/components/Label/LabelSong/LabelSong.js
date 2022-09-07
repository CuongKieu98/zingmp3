import React from 'react'

import styles from "./LabelSong.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';



const cx = classNames.bind(styles);

function LabelSong({title,img,auths}) {


  return (
    <div className={cx('media-song')}>
        <div className={cx('media-left')}>
            <div>
                <figure className={cx('media-img')}>
                    <img src={img} alt=''/>
                </figure>
                <div className={cx('opacity')}></div>
                <button className={cx('action-media')}>
                    <FontAwesomeIcon className={cx('icon-media')} icon={faPlayCircle}/>
                </button>
            </div>
        </div>
        <div className={cx('media-content')}>
            <h3 className={cx('title-media')}>
                <a href='https://zingmp3.vn/bai-hat/Song-Gio/ZWAEIUUB.html' >{title}</a>
            </h3>
            <h3 className={cx('subtitle-media')}>{auths}</h3>
        </div>
    </div>
  )
}

export default LabelSong