import React from 'react'
import styles from "./TabList.module.scss";
import classNames from "classnames/bind";
import Media from '../Media/Media';
import GroupChart from '../GroupChart/GroupChart';


const cx = classNames.bind(styles);
 
function TabListItem(data) {
  let listItem = data.data.items
  console.log(listItem);
  return (
    <div className={cx("list")}>
        <div className={cx("song-list")}>
            {listItem?.map((item,index) =>(
                <div className={cx("list-item")} key={item.encodeId}>
                    <GroupChart 
                    author={item.artistsNames}
                    name={item.title}
                    img={item.thumbnail}
                    rank={index +1}
                    duration={item.duration}
                    code={item.encodeId}
                    className={"image-is40"}
                    customClass={"no-background"}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default TabListItem