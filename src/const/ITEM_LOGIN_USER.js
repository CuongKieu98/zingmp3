import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { ArrowBarRight, Badge8k, BagCheck } from 'react-bootstrap-icons'


const ITEM_LOGIN_USER = [
  {
    id: 1,
    icon: Badge8k,
    title: "Nâng cấp VIP",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
  },
  {
    id: 2,
    icon: BagCheck,
    title: "Mua code VIP",
    href: "https://zingmp3.vn/vip/buyCode?utm_source=desktop&utm_campaign=VIP&utm_medium=avatar-buycode",
  },

];
const FOOTER_ITEM =[
    {
        id:3,
        icon:ArrowBarRight,
        title: "Đăng xuất",
        isFooter:true
      }
]

export {ITEM_LOGIN_USER,FOOTER_ITEM};
