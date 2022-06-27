import {useState} from "react";
import styles from "./MenuIcon.module.scss";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import * as Icon from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuIcon({}) {
  const [isActive,setIsActive] = useState(false)
  let active = isActive ? "active" : ""
  return (
    <div className={cx("cnk-list-playing-hover")+ " " + cx(active)}>
      <div className={cx("toggle")}>
        
        <Button className={"is45"} setIcon={Icon.MusicNoteList} onClick={() => setIsActive(!isActive)}/>
      </div>

        <span>
          <Link to={"/"}>
          <Button className={"is45"} setIcon={Icon.BarChart} />
          </Link>
        </span>
        <span>
          <Link to={"/"}>
          <Button className={"is45"} setIcon={Icon.Soundwave} />
          </Link>
        </span>
        <span>
          <Link to={"/"}>
          <Button className={"is45"} setIcon={Icon.Person} />
          </Link>
        </span>
        <span>
          <Link to={"/"}>
          <Button className={"is45"} setIcon={Icon.Broadcast} />
          </Link>
        </span>


    </div>
  );
}

export default MenuIcon;
