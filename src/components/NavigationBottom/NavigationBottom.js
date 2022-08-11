import React, { useState } from "react";
import classNames from "classnames/bind";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./NavigationBottom.module.scss";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const cx = classNames.bind(styles);

function NavigationBottom() {
  const [value, setValue] = useState("/");
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
        {
          id: 4,
          icon: <ExploreOutlinedIcon />,
          href: "/progfile",
          label: "Profile",
        },
      ]);
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  let currPath = window.location.pathname;
  console.log();
  return (
    // <BottomNavigation
    //     showLabels
    //     value={value}
    //     onChange={handleChange}
    //   >
    //     {menuItems.map(({ id, icon, href, label}) => (
    //        <BottomNavigationAction key={id} label={label} icon={icon} value={href} />
    //     ))}

    //   </BottomNavigation>
    <div className={cx("bottom-navigation")}>
    {menuItems.map(({ id, icon, href, label}) => (
      
      <Link className={cx("bottom-navigation-link") + " " + (currPath === href ? cx("active") : "")} key={id} to={href}>
        <Button
          className={cx("bottom-action")}
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