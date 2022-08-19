
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
const ITEM_SIDEBAR_MIDDLE = [
  {
    id: 1,
    icon: LibraryMusicIcon,
    text: "Nhạc Mới",
    to: "/mymusic",
  },
  {
    id: 2,
    icon: DashboardCustomizeIcon,
    text: "Thể Loại",
    to: "/type",
    iconRight: "none",
  },
  {
    id: 3,
    icon: StarBorderIcon,
    text: "Top 100",
    to: "/zing-chart",
    iconRight: "none",
  },
  {
    id: 4,
    icon: OndemandVideoIcon,
    text: "MV",
    to: "/radio",
    iconRight: "none",
  },
];
export default ITEM_SIDEBAR_MIDDLE;
