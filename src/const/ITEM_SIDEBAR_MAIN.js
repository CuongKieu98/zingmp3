
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import AlbumIcon from '@mui/icons-material/Album';
import BarChartIcon from '@mui/icons-material/BarChart';
import RadioIcon from '@mui/icons-material/Radio';
import ListAltIcon from '@mui/icons-material/ListAlt';
const ITEM_SIDEBAR_MAIN = [
    {
        id:1,
        icon: SpatialAudioOffIcon,
        text:'Cá Nhân',
        to:'/',
    },
    {
        id:2,
        icon: AlbumIcon,
        text:'Khám Phá',
        to:'/',
    },
    {

        id:3,
        icon: BarChartIcon,
        text:'#zingchart',
        to:'/zing-chart',
        
    },
    {
        id:4,
        icon: RadioIcon,
        text:'Radio',
        live:'https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg',
        to:'/',
    },
    {
        id:5,
        icon: ListAltIcon,
        text:'Theo Dõi',
        to:'/',
        iconRight:'none'
    },
]
export default ITEM_SIDEBAR_MAIN