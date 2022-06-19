
import { faChrome, faVuejs } from "@fortawesome/free-brands-svg-icons";
import {  faCircleUp, faUser, } from "@fortawesome/free-regular-svg-icons";
import images from "../assets/images";

const ITEM_HEADER_RIGHT = [
    {
        id:1,
        iconSvg: images.theme,
        title:'Chủ đề',
    },
    {
        id:2,
        icon: faVuejs,
        title:'Nâng cấp VIP',
        to:'/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=icon-header',

    },
    {

        id:3,
        icon: faCircleUp,
        title:'Tải lên',
    },
    {
        id:4,
        icon: faChrome,
        title:'Cài đặt',


    },
    {
        id:5,
        icon: faUser,
        title:'Thông tin',
    },
]
export default ITEM_HEADER_RIGHT