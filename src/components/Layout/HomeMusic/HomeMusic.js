import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { addPlaylist } from '../../../redux/actions/actions';
import { addPlaylistSelector } from '../../../redux/selectors/selectors';
import NavigationBottom from '../../NavigationBottom/NavigationBottom';
// import styles from "./HomeMusic.module.scss";
// import classNames from "classnames/bind";
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import NowPlaying from './PlayingBar/NowPlaying';

// const cx = classNames.bind(styles);

function HomeMusic({children}) {

  const playlist = useSelector(addPlaylistSelector);

  return (
    <>
    <Header />
    {children}
    <NowPlaying tracks={playlist}/>
    

    </>
  )
}

export default HomeMusic