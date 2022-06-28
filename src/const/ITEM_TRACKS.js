import { Images } from "react-bootstrap-icons";
import tracks from "../assets/tracks";
import images from "../assets/images";
import playlistImg from "../assets/playlistImg";



const ITEM_TRACKS = [
  {
    id: 1,
    title: "Chờ ngày cưới em",
    audioSrc: tracks.chongaycuoiem,
    img:playlistImg.chongaycuoiem
  },
  {
    id: 2,
    title: "Nhìn Mây Vẽ Người",
    audioSrc: tracks.nhinmayvenguoi,
    img:playlistImg.nhinmay
  },
  {
    id: 3,
    title: "Vì Mẹ Anh Bắt Chia Tay",
    audioSrc: tracks.vimeanhbatchiatay,
    img:playlistImg.miule2
  },
  {
    id: 4,
    title: "Chim sẻ dâu tây",
    audioSrc: tracks.chimsedautay,
    img:playlistImg.chimse
  },
  {
    id: 5,
    title: "ILLusion",
    audioSrc: tracks.Illusion,
    img:playlistImg.iilison
  },
  {
    id: 6,
    title: "Khác biệt to lớn",
    audioSrc: tracks.Khacbiettolon,
    img:playlistImg.khacbiet
  },
  {
    id: 7,
    title: "Ít nhưng dài lâu",
    audioSrc: tracks.itnhungdailau,
    img:playlistImg.itnhungdai
  },

];

export default ITEM_TRACKS;
