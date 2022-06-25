import React from 'react'
import styles from "./Media.module.scss";
import classNames from "classnames/bind";
import Button from '../../Button/Button';
import { PlayFill,Heart ,ThreeDots} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import images from '../../../assets/playlistImg';

const cx = classNames.bind(styles);

function Media({title,img,audio,onClick,isActive = false}) {
    let active = isActive ? "is-active" : ""
  return (
    <div className={cx('list-item-is-pre')+ " " + cx(active)}>
            <div className={cx('left')}>
                <div className={cx('song-thumb')}>
                    <figure className='image-is40' title={title}>
                        <img src={img} alt=""/>
                    </figure>
                    <div className={cx('opacity')}></div>
                    <div className={cx('cnk-action-container')}>
                        <div className={cx('cnk-action')}>
                            <Button setIcon={PlayFill} onClick={onClick}/>
                        </div>
                    </div>
                </div>
                <div className={cx('card-info')}>
                    <div className={cx('title-wrapper')}>
                        <div className={cx('item-title')}>
                            <span className={cx('song-title')}>{title}</span>
                           
                        </div>
                    </div>
                    <h3 className={cx('subtitle')}>
                        <Link to={"/dasd"}>Châu Khai Phong</Link>,
                        <Link to={"/dasd"}>ACV</Link>
                    </h3>
                </div>
            </div>
            <div className={cx('right')}>
                <div className='level'>
                    <div className='level-item'>
                        <Button setIcon={Heart} title={"Thêm vào thư viện"} customIcon={"is16"}/>
                    </div>
                    <div className='level-item'>
                        <Button setIcon={ThreeDots} title={"Khác"} />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Media