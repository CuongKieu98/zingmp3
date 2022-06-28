import HomePage from "../pages/Home/HomePage"
import PlaylistPage from "../pages/Playlist/PlaylistPage"
import ProfilePage from "../pages/Profile/ProfilePage"


const publicRoutes = [
    {path:'/' ,component: HomePage},
    {path:'/profile' ,component: ProfilePage},
    {path:'/playlist' ,component: PlaylistPage},
]

const privateRoutes = [

]
export {publicRoutes,privateRoutes}