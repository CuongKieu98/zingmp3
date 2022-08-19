import { faChrome, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faCircleUp, faUser } from "@fortawesome/free-regular-svg-icons";
import images from "../assets/images";
import { BadgeHd, Display, Gear, PersonX } from "react-bootstrap-icons"
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import HdOutlinedIcon from '@mui/icons-material/HdOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
const ITEM_SETTING_HEADER = [
  {
    id: 1,
    icon: NotInterestedIcon,
    title: "Danh sách chặn",
  },
  {
    id: 2,
    icon: HdOutlinedIcon,
    title: "Chất lượng nhạc",
    children: [
      {
        titleChil: "SQ • 128",
        descChil: "Giảm sử dụng dữ liệu cho các kết nối chậm hơn.",
      },
      {
        titleChildren: "HQ • 320",
        descChil:
          "Kết hôp tốt nhất cho việc sử dụng dữ liệu và chất lượng âm thanh.",
      },
    ],
  },
  {
    id: 3,
    icon: PlayCircleOutlineOutlinedIcon,
    title: "Giao diện",
    children: [
      {
        titleChil: "Luôn phát nhạc toàn màn hình",
      },
      {
        titleChil: "Hiệu ứng",
      },
    ],
  },

];

export default ITEM_SETTING_HEADER;
