import React from 'react';
// import styles from "./HomeMusic.module.scss";
// import classNames from "classnames/bind";
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import NowPlaying from './PlayingBar/NowPlaying';

// const cx = classNames.bind(styles);

function HomeMusic() {
  return (
    <>
    <Header />

    <NowPlaying />

    </>
  )
}

export default HomeMusic