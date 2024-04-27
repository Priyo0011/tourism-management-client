import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Update from "../pages/Update";
import Detail from "../components/Detail";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch(`http://localhost:5000/spot`)
        },
        {
          path: "/detail/:id",
          element: <Detail></Detail>, 
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
          path: "/update/:id",
          element:<Update></Update>,
          loader: ({params})=> fetch(`http://localhost:5000/singleSpot/${params.id}`)
        },

        {
          path: "/all-tourists-spot",
          element: <AllTouristsSpot></AllTouristsSpot>,
          loader: ()=> fetch(`http://localhost:5000/spot`)
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