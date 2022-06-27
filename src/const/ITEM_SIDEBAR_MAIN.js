
import { Broadcast, Eyeglasses, PersonCircle, PieChart, Soundwave } from 'react-bootstrap-icons'

const ITEM_SIDEBAR_MAIN = [
    {
        id:1,
        icon: PersonCircle,
        text:'Cá Nhân',
        to:'/mymusic',
    },
    {
        id:2,
        icon: Soundwave,
        text:'Khám Phá',
        to:'/',
        active:'active'
    },
    {

        id:3,
        icon: PieChart,
        text:'#zingchart',
        to:'/zing-chart',
        
    },
    {
        id:4,
        icon: Broadcast,
        text:'Radio',
        live:'https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg',
        to:'/radio',
    },
    {
        id:5,
        icon: Eyeglasses,
        text:'Theo Dõi',
        to:'the-loai-nghe-si',
        iconRight:'none'
    },
]
export default ITEM_SIDEBAR_MAIN