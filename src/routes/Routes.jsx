import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:5000/addSpot')
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/all-tourists-spot",
          element: <AllTouristsSpot></AllTouristsSpot>,
        },
        {
          path: "/add-tourists-spot",
          element:<AddTouristsSpot></AddTouristsSpot>,
        },
        {
          path: "/my-list",
          element:<MyList></MyList>,
        }, 
      ],
    },
  ]);
  
  export default router;