import { Images } from "react-bootstrap-icons";
import tracks from "../assets/tracks";
import images from "../assets/images";
import playlistImg from "../assets/playlistImg";



const ITEM_TRACKS = [
  {
    id: 1,
    title: "Chờ ngày cưới em",
    audioSrc: tracks.chongaycuoiem,
    img:playlistImg.newcpopp
  },
  {
    id: 2,
    title: "Nhìn Mây Vẽ Người",
    audioSrc: tracks.nhinmayvenguoi,
    img:playlistImg.kpopnew
  },
  {
    id: 3,
    title: "Vì Mẹ Anh Bắt Chia Tay",
    audioSrc: tracks.vimeanhbatchiatay,
    img:playlistImg.miule2
  },

];

export default ITEM_TRACKS;
