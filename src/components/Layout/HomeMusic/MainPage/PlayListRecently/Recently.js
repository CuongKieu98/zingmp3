import React from "react";
import styles from "./Recently.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Recently() {
  return (
    <div className="cnk-playlist">
      <div className="cnk-playlist-container">
        <h3 className="cnk-playlist-title">Gần đây</h3>
        <div className="cnk-playlist-wapper">
            
        </div>
      </div>
    </div>
  );
}

export default Recently;
