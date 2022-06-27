import {Badge4k, Grid, MusicNoteBeamed, Star} from 'react-bootstrap-icons'

const ITEM_SIDEBAR_MIDDLE = [
  {
    id: 1,
    icon: MusicNoteBeamed,
    text: "Nhạc Mới",
    to: "/mymusic",
  },
  {
    id: 2,
    icon: Grid,
    text: "Thể Loại",
    to: "/type",
    iconRight: "none",
  },
  {
    id: 3,
    icon: Star,
    text: "Top 100",
    to: "/zing-chart",
    iconRight: "none",
  },
  {
    id: 4,
    icon: Badge4k,
    text: "MV",
    to: "/radio",
    iconRight: "none",
  },
];
export default ITEM_SIDEBAR_MIDDLE;
