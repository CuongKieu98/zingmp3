
import {
  faCircleDot,
  faCirclePlay,
  faComment,
  faContactCard,
} from "@fortawesome/free-regular-svg-icons";

const ITEM_SIDEBAR_MIDDLE = [
  {
    id: 1,
    icon: faContactCard,
    text: "Nhạc Mới",
    to: "/mymusic",
  },
  {
    id: 2,
    icon: faCircleDot,
    text: "Thể Loại",
    to: "/type",
    iconRight: "none",
  },
  {
    id: 3,
    icon: faComment,
    text: "Top 100",
    to: "/zing-chart",
    iconRight: "none",
  },
  {
    id: 4,
    icon: faCirclePlay,
    text: "MV",
    to: "/radio",
    iconRight: "none",
  },
];
export default ITEM_SIDEBAR_MIDDLE;
