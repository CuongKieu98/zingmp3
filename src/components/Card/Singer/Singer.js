import React from 'react'
import styles from "./Singer.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);
function CardSinger({href,img}) {
  return (
    <Link to={href} className={cx('cnk-item')}>
    <figure className={cx('img')}>
        <img src={img} alt=""/>
    </figure>
    </Link>
  )
}

export default CardSinger