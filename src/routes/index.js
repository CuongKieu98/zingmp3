import ChartPage from "../pages/Chart/ChartPage"
import HomePage from "../pages/Home/HomePage"
import PlaylistPage from "../pages/Playlist/PlaylistPage"
import ProfilePage from "../pages/Profile/ProfilePage"


const publicRoutes = [
    {path:'/' ,component: HomePage},
    {path:'/profile' ,component: ProfilePage},
    {path:'/playlist' ,component: PlaylistPage},
    {path:'/zing-chart' ,component: ChartPage},
]

const privateRoutes = [

]
export {publicRoutes,privateRoutes}