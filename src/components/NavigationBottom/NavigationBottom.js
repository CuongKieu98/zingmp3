import React, { useState } from "react";
import classNames from "classnames/bind";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./NavigationBottom.module.scss";
const cx = classNames.bind(styles);

function NavigationBottom() {
    const [menuItems, setMenuItem] = useState([
        {
          id: 0,
          icon: <HomeOutlinedIcon />,
          href: "/",
          label: "Home",
        },
        {
          id: 1,
          icon: <SearchIcon />,
          href: "/home/search",
          label: "Search",
        },
        {
          id: 2,
          icon: <AccountCircleOutlinedIcon />,
          href: "/playlist",
          label: "Playlist",
        },
        {
          id: 3,
          icon: <ExploreOutlinedIcon />,
          href: "/profile",
          label: "Profile",
        },
      ]);
  let currPath = window.location.pathname;

  return (
    <div className={cx("bottom-navigation")}>
    {menuItems.map(({ id, icon, href, label }) => (
      <Link className={cx("bottom-navigation-link")} key={id} to={href}>
        <Button
          className={`${
            currPath === href ? "BottomNavAction active" : "BottomNavAction"
          }`}
          style={{ borderRadius: 0 }}
        >
          {icon}
        </Button>
        <span className={cx("label")}>{label}</span>
      </Link>
    ))}
  </div>
  )
}

export default NavigationBottom