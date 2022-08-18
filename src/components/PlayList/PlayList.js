import React from "react";
import classNames from "classnames/bind";
import styles from "./PlayList.module.scss";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import CardPlayList from "../CardPlayList/CardPlayList";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function PlayList({ playLists, title, content }) {
  return (
    <div className={cx("container-play-list")}>
      <div className={cx("title")}>
        {content && (
          <div className={cx("media-left")}>
            <Link to={content.href}>
              <div className={cx("media-img")}>
                <figure className={cx("img")}>
                  <img src={content.avatar} alt="" title={content.title} />
                </figure>
              </div>
            </Link>
          </div>
        )}

        <h2>{title}</h2>
      </div>

      <div className={cx("list-card")}>
        <div className={cx("wrapper")}>
          {playLists.map((item) => (
            <Card
              key={item.id}
              author={item.Author}
              content={item.content}
              href={item.href}
              img={item.img}
              subTiltle={item.subTiltle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayList;
