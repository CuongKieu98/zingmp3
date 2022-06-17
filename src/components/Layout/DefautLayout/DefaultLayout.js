import React from 'react'
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import SideBar from '../SideBar/SideBar';
import HomeMusic from '../HomeMusic/HomeMusic';
const cx = classNames.bind(styles);

function DefaultLayout({children}) {
  return (
    <div className={cx('container')}>
      <SideBar />
      <HomeMusic />
      {children}
      </div>
  )
}

export default DefaultLayout