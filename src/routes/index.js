import HomePage from "../pages/Home/HomePage"
import ProfilePage from "../pages/Profile/ProfilePage"


const publicRoutes = [
    {path:'/' ,component: HomePage},
    {path:'/profile' ,component: ProfilePage},
]

const privateRoutes = [

]
export {publicRoutes,privateRoutes}