import Home from "../pages/home";
import Profile from "../pages/profile";
import Followers from "../pages/followers";
import Following from "../pages/following";
import Signup from "../pages/auth/Register";
import Login from "../pages/auth/Login";

const AllRoutes = [
  // Auth Routes
  {
    name: "Register",
    path: "/register",
    element: Signup,
  },

  {
    name: "Login",
    path: "/login",
    element: Login,
  },

  {
    name: "Home",
    path: "/",
    element: Home,
  },
  {
    name: "Profile",
    path: "/profile",
    element: Profile,
  },
  {
    name: "Followers",
    path: "/profile/followers",
    element: Followers,
  },
  {
    name: "Following",
    path: "/profile/followings",
    element: Following,
  },
];

export default AllRoutes;
