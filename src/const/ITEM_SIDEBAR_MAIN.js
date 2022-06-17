
import { faAngellist} from "@fortawesome/free-brands-svg-icons";
import {  faCircleDot, faCirclePlay, faComment, faContactCard } from "@fortawesome/free-regular-svg-icons";

const ITEM_SIDEBAR_MAIN = [
    {
        id:1,
        icon: faContactCard,
        text:'Cá nhân',
        to:'/mymusic',
    },
    {
        id:2,
        icon: faCircleDot,
        text:'Khám Phá',
        to:'/',
    },
    {

        id:3,
        icon: faComment,
        text:'#zingchart',
        to:'/zing-chart',
        active:'active'
    },
    {
        id:4,
        icon: faCirclePlay,
        text:'Radio',
        live:'https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg',
        to:'/radio',
    },
    {
        id:5,
        icon: faAngellist,
        text:'Theo Dõi',
        to:'the-loai-nghe-si'
    },
]
export default ITEM_SIDEBAR_MAIN