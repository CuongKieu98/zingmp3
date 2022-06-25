import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import * as Icon from "react-bootstrap-icons";

import Button from "../Button/Button";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const Card = ({ content, href, img, author = [], subTiltle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    alert("clicked");
  };
  const ath = author.map(auth => {
    return (
      <Link>{auth.name}</Link>
    )
  })
  const RenderAuthor = () => {
    //get max 3 author
    return author.slice(0,3).map((auth, index) => {
      return (
        <Link key={index} className={cx("cnk-card-author")} to={auth.profile}>
          {auth.name}
        </Link>
      );
    });
  };
  return (
    <div className={cx("cnk-card")}>
      <div>
        <a title={content} href={href}>
          <div className={cx("cnk-card-img")}>
            <figure className={cx("image")}>
              <img className={cx("img-card")} src={img} alt="" />
            </figure>
            <div className={cx("opacity")}></div>
            <div className={cx("cnk-playlist-action")}>
              <div className={cx("cnk-card-action")}>
                <Button
                  onClick={(e) => handleClick(e)}
                  title={"Thêm vào thư viện"}
                  setIcon={Icon.Heart}
                  className={'padding-heart'}
                />
                <Button
                  onClick={(e) => handleClick(e)}
                  setIcon={Icon.PlayFill}
                  className={'is40'}
                />

                <Button
                  onClick={(e) => handleClick(e)}
                  title={"Khác"}
                  setIcon={Icon.ThreeDots}
                />
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className={cx("cnk-card-content")}>
        <h4 className={cx("cnk-card-title")}>
          <a title={content} href={href}>
            <span className={cx("cnk-card-name")}>{content}</span>
          </a>
        </h4>
        <h3 className={cx("subtitle-author")}>

          {author.length > 0 && (
            <React.Fragment>
              <RenderAuthor />{author.length >3 && "..."}
            </React.Fragment>
          )}
          {subTiltle && (
            <span className={cx("cnk-card-subtitle")}>{subTiltle}</span>
          )}
        </h3>
      </div>
    </div>
  );
};

export default Card;
