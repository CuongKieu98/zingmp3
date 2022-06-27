import playlistImg from "../assets/playlistImg";
import singer from "../assets/singer";

const LIST_RANDOM = [
  {
    id: 1,
    img: playlistImg.nhachoaloiviet,
    content: "Nhạc hoa lời việt hay nhất",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Đan Trường",
        profile: "/Dan-truong",
      },
      {
        name: "Tăng Phúc",
        profile: "/Tang-phuc",
      },
      {
        name: "Trương Thảo Nhi",
        profile: "/Truong-thao-nhi",
      },
      {
        name: "Trương Thảo Nhi",
        profile: "/Truong-thao-nhi",
      },
      {
        name: "Trương Thảo Nhi",
        profile: "/Truong-thao-nhi",
      },
    ],
  },
  {
    id: 2,
    img: playlistImg.bolerometvl,
    content: "Bolero Mệt Vườn",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Đan Trường",
        profile: "/Dan-truong",
      },
      {
        name: "Tăng Phúc",
        profile: "/Tang-phuc",
      },
    ],
  },
  {
    id: 3,
    img: playlistImg.bestfor8x,
    content: "Nhạc trẻ hay nhất thế hệ 8X",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Đan Trường",
        profile: "/Dan-truong",
      },
      {
        name: "Tăng Phúc",
        profile: "/Tang-phuc",
      },
      {
        name: "Trương Thảo Nhi",
        profile: "/Truong-thao-nhi",
      },
    ],
  },
  {
    id: 4,
    img: playlistImg.rapviet,
    content: "Nhạc hoa lời việt hay nhất",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Đan Trường",
        profile: "/Dan-truong",
      },
      {
        name: "Tăng Phúc",
        profile: "/Tang-phuc",
      },
      {
        name: "Trương Thảo Nhi",
        profile: "/Truong-thao-nhi",
      },
    ],
  },
  {
    id: 5,
    img: playlistImg.nhac,
    content: "Nhạc hoa lời việt hay nhất",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Đan Trường",
        profile: "/Dan-truong",
      },
      {
        name: "Tăng Phúc",
        profile: "/Tang-phuc",
      },
      {
        name: "Trương Thảo Nhi",
        profile: "/Truong-thao-nhi",
      },
    ],
  },
];
const LIST_TODAY = [
  {
    id: 1,
    img: playlistImg.nhacviet,
    content: "Summer Hip",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "Nhún nhẩy theo nhịp flow mùa hè với Rap Việt",
  },
  {
    id: 2,
    img: playlistImg.hoahongnhacviet,
    content: "Đoá hồng nhạc việt",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "Nữ ca sĩ toả sắc hương trong khu vườn V-POP",
  },
  {
    id: 3,
    img: playlistImg.kpopnew,
    content: "K-Pop Newbie",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "Ở đây có Kep1er, Tempest, IVE và những tân binh mới nổi",
  },
  {
    id: 4,
    img: playlistImg.nhacviet2,
    content: "Rap Việt ngày nay",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "Tan ra cùng những track Rap Việt ngày nay",
  },
  {
    id: 5,
    img: playlistImg.nhacviet1,
    content: "Tiềm năng V-Pop",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "Hạt giống tiềm năng của V-Pop trong thời gian tới",
  },
];
const LIST_CORNER = [
  {
    id: 1,
    img: playlistImg.xconer1,
    content: "Tell me your wish",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "SNSD & cả thanh xuân cùng bạn",
  },
  {
    id: 2,
    img: playlistImg.xconer2,
    content: "Ăn gì XONE mời",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "Ở đây có những món ngon không thể từ chối",
  },
  {
    id: 3,
    img: playlistImg.xconer3,
    content: "R&B in the mood",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "Cùng XONE lắng đọng R&B trong ngày mưa",
  },
  {
    id: 4,
    img: playlistImg.xconer4,
    content: "Rush hour",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "Nghe nhạc XONE, giờ cao điểm trở nên nhẹ nhàng",
  },
  {
    id: 5,
    img: playlistImg.xconer5,
    content: "Social Trending",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "Phóng ra, thu vào và hàng loạt các bài hát tạo trend",
  },
];
const LIST_RADIO = [
  {
    id: 1,
    img: playlistImg.radio1,
    imgHost: playlistImg.radiocon1,
    content: "XONE Radio",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "8K đang nghe",
  },
  {
    id: 2,
    img: playlistImg.radio2,
    imgHost: playlistImg.radio2,
    content: "K-POP",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "424 đang nghe",
  },
  {
    id: 3,
    img: playlistImg.radio3,
    imgHost: playlistImg.radio3,
    content: "US-UK",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "2K đang nghe",
  },
  {
    id: 4,
    img: playlistImg.radio4,
    imgHost: playlistImg.radiocon4,
    content: "Chạm",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "993 đang nghe",
  },
  {
    id: 5,
    img: playlistImg.radio5,
    imgHost: playlistImg.radio5,
    content: "Rap việt",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "2K đang nghe",
  },
  {
    id: 6,
    img: playlistImg.radio9,
    content: "XONE Radio",
    imgHost: playlistImg.radiocon1,
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "774 đang nghe",
  },
  {
    id: 7,
    img: playlistImg.radio7,
    content: "Bolero",
    imgHost: playlistImg.radio7,
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "362 đang nghe",
  },
  {
    id: 8,
    img: playlistImg.radio8,
    content: "Acoustic",
    imgHost: playlistImg.radiocon8,
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "3K đang nghe",
  },
  {
    id: 9,
    img: playlistImg.radio6,
    content: "The one radio",
    imgHost: playlistImg.radio6,
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    subTiltle: "342 đang nghe",
  },
];
const LIST_FOR_FAN = [
  {
    id: 1,
    img: playlistImg.miule1,
    content: "Chỉ có thể là Miu Lê",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Miu Lê",
        profile: "/Miu-Le",
      },
    ],
  },
  {
    id: 2,
    img: playlistImg.miule2,
    content: "Vì mẹ anh bắt chia tay (Single)",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Miu Lê",
        profile: "/Dan-truong",
      },
      {
        name: "Karik★",
        profile: "/Karik",
      },
      {
        name: "Châu Đăng Khoa",
        profile: "/Truong-thao-nhi",
      },
    ],
  },
  {
    id: 3,
    img: playlistImg.miule3,
    content: "Quên như chưa từng yêu",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Miu Lê",
        profile: "/Dan-truong",
      },
    ],
  },
  {
    id: 4,
    img: playlistImg.miule4,
    content: "Ngày anh xa",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Miu Lê",
        profile: "/Dan-truong",
      },
    ],
  },
  {
    id: 5,
    img: playlistImg.miule5,
    content: "Không còn nhau",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Miu Lê",
        profile: "/Dan-truong",
      },
    ],
  },
];
const LIST_NEW_EVERYDAY = [
  {
    id: 1,
    img: playlistImg.newvpop,
    content: "V-Pop tháng 6/2022",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Miu Lê",
        profile: "/Miu-Le",
      },
      {
        name: "Karik★",
        profile: "/Miu-Le",
      },
      {
        name: "AMME",
        profile: "/Miu-Le",
      },
      {
        name: "Miu Lê",
        profile: "/Miu-Le",
      },
    ],
  },
  {
    id: 2,
    img: playlistImg.newusuk,
    content: "US-UK tháng 6/2022",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "Beyoncé",
        profile: "/Dan-truong",
      },
      {
        name: "Allan Walker",
        profile: "/Karik",
      },
      {
        name: "Calum Scott",
        profile: "/Truong-thao-nhi",
      },
      {
        name: "Calum Scott",
        profile: "/Truong-thao-nhi",
      },
    ],
  },
  {
    id: 3,
    img: playlistImg.newkpop,
    content: "K-Pop tháng 6/2022",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "NCT Dream",
        profile: "/Dan-truong",
      },
      {
        name: "Kep1er",
        profile: "/Dan-truong",
      },
      {
        name: "SECRET NUMBER",
        profile: "/Dan-truong",
      },
    ],
  },
  {
    id: 4,
    img: playlistImg.newcpopp,
    content: "C-Pop tháng 6/2022",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "白小白 / Bạch Tiểu Bạch",
        profile: "/Dan-truong",
      },
      {
        name: "小蓝背心 / Tiểu Lam Bối Tâm",
        profile: "/Dan-truong",
      },
      {
        name: "蘇星婕 / Tô Tinh Tiệp",
        profile: "/Dan-truong",
      },
    ],
  },
  {
    id: 5,
    img: playlistImg.newvindie,
    content: "Indie Việt tháng 6/2022",
    href: "https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s",
    Author: [
      {
        name: "T.R.I",
        profile: "/Dan-truong",
      },
      {
        name: "Táo",
        profile: "/Dan-truong",
      },
      {
        name: "Trang",
        profile: "/Dan-truong",
      },
    ],
  },
];
const LIST_SINGER = [
  {
    id: 1,
    img: singer.chidan,
    href: "",
  },
  {
    id: 2,
    img: singer.erik,
    href: "",
  },
  {
    id: 3,
    img: singer.hoaminzy,
    href: "",
  },
  {
    id: 4,
    img: singer.huongly,
    href: "",
  },
  {
    id: 5,
    img: singer.mrsiro,
    href: "",
  },
  {
    id: 6,
    img: singer.jack,
    href: "",
  },
  {
    id: 7,
    img: singer.justatee,
    href: "",
  },
  {
    id: 8,
    img: singer.karik,
    href: "",
  },
  {
    id: 9,
    img: singer.trinhthanhbinh,
    href: "",
  },
];

const LIST_EVENT = [
  {
    id: 1,
    img: singer.phathanh,
    href: "",
    title: "PHÁT HÀNH BÀI HÁT",
    content:"Một Ngàn Nỗi Đau- Hứa Kim Tuyền",
  },
  {
    id: 2,
    img: singer.xone,
    href: "",
    title: "TAKESHOW",
    content:"Gặp gỡ PAY hát cùng Thịnh Suy",
  },
  {
    id: 3,
    img: singer.sinhnhat,
    href: "",
    title: "SINH NHẬT SAO",
    content:"Sinh Nhật Sao x Hoàng Duyên",
  },
  {
    id: 4,
    img: singer.minishow,
    href: "",
    title: "MINISHOW",
    content:"Minishow Vũ Cát Tường",
  },
  {
    id: 5,
    img: singer.event2,
    href: "",
    title: "TALKSHOW",
    content:"Thiều Bảo Trâm tiết lộ gu bạn trai",
  },
  {
    id: 6,
    img: singer.minishow2,
    href: "",
    title: "MINISHOW",
    content:"Minishow Trịnh Thăng Bình",
  },
];
const LIST_MIXTAPE = [];
const LIST_NER_RELEASE = [];
export {
  LIST_RANDOM,
  LIST_TODAY,
  LIST_CORNER,
  LIST_RADIO,
  LIST_FOR_FAN,
  LIST_NEW_EVERYDAY,
  LIST_SINGER,
  LIST_EVENT,
};
