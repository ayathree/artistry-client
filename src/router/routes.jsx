
import { createBrowserRouter } from "react-router-dom";
import Error from "../page/Error";
import Home from "../page/Home";
import Root from "../page/Root";
import AllArt from "../page/AllArt";
import AddCraft from "../page/AddCraft";
import MyCraft from "../page/MyCraft";
import Logged from "../page/Logged";
import Register from "../page/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,

        },
        {
            path:'/allArt',
            element:<AllArt></AllArt>
        },
        {
            path:'/addCraft',
            element:<AddCraft></AddCraft>
        },
        {
            path:'/myCraft',
            element:<MyCraft></MyCraft>
        },
        {
           path:'/logged',
           element:<Logged></Logged>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

  export default router