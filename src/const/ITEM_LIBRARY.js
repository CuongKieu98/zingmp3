
import images from "../assets/images";

const ITEM_LIBRARY = [
    {
        id:1,
        icon: images.mysong,
        text:'Bài hát',
        to:'/mymusic',
    },
    {
        id:2,
        icon: images.myplaylist,
        text:'Playlist',
        to:'/',
        iconRight:'none'

    },
    {

        id:3,
        icon: images.myalbum,
        text:'Album',
        to:'/zing-chart',
        iconRight:'none'

        
    },
    {
        id:4,
        icon: images.myupload,
        text:'Nhạc tải lên',
        live:'https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg',
        to:'/radio',
        iconRight:'none'

    },
    {
        id:5,
        icon: images.myhistory,
        text:'Gần đây',
        to:'the-loai-nghe-si',
        iconRight:'none'
    },
]
export default ITEM_LIBRARY