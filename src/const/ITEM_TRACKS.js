import { Images } from "react-bootstrap-icons";
import tracks from "../assets/tracks";
import images from "../assets/images";
import playlistImg from "../assets/playlistImg";



const ITEM_TRACKS = [
  {
    id: 1,
    title: "Chờ ngày cưới em",
    name:"Chờ ngày cưới em",
    artists_names:"ình Dũng, Minh Vương M4U, ACV",
    code:"kncHyZLdSFchDJLTmTbmLmyZhXmQQHFQa",
    audioSrc: "https://vnso-zn-5-tf-mp3-s1-m-zmp3.zmdcdn.me/61666e53a7124e4c1703/4879002215398700652?authen=exp=1660712257~acl=/61666e53a7124e4c1703/*~hmac=929f7ee607974902bb126ab47eaff14a&fs=MTY2MDUzOTQ1NzE5NHx3ZWJWNHwxMjMdUngMzAdUngMjE4LjQ0",
    duration:"303",
    img:"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/2/7/5/2275dda526935755fc51b587e08e1d7e.jpg?fs=MTY2MDU0MTYwNjEzNnx3ZWJWNHw",
    rank_status:"stand",
    lyric:"",
    position:1,   
  },
  {
    id: 2,
    title: "Nhìn Mây Vẽ Người",
    audioSrc: tracks.nhinmayvenguoi,
    img:playlistImg.nhinmay,
    lyric:"",
  },
  {
    id: 3,
    title: "Vì Mẹ Anh Bắt Chia Tay",
    audioSrc: tracks.vimeanhbatchiatay,
    img:playlistImg.miule2,
    lyric:"",
  },
  {
    id: 4,
    title: "Chim sẻ dâu tây",
    audioSrc: tracks.chimsedautay,
    img:playlistImg.chimse,
    lyric:"",

  },
  {
    id: 5,
    title: "ILLusion",
    audioSrc: tracks.Illusion,
    img:playlistImg.iilison,
    lyric:"",
  },
  {
    id: 6,
    title: "Khác biệt to lớn",
    audioSrc: tracks.Khacbiettolon,
    img:playlistImg.khacbiet,
    lyric:"",
  },
  {
    id: 7,
    title: "Ít nhưng dài lâu",
    audioSrc: tracks.itnhungdailau,
    img:playlistImg.itnhungdai,
    lyric:"",
  },

];

export default ITEM_TRACKS;
