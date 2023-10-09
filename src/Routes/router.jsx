import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Gallery from "../Components/Home/Gallery/Gallery";
import History from "../Components/History/History";
import FilmPremier from "../Components/Events/Premier/FilmPremier";
import Submission from "../Components/Events/Submission/Submission.jsx";
import FilmAndFun from "../Components/Events/FIlmAndFun/FilmAndFun";
import ConvocationEvent from "../Components/Events/Convocation/ConvocationEvent";
import Scholarships from "../Components/Events/Sholarships/Scholarships";
import Cinematography from "../Components/Events/Cinematography/Cinematography";
import Footer from "../Components/Home/Footer/Footer";
import EventHandling from "../Components/Home/EventHeld/EventHandling;/EventHandling;";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/',
        element:<EventHandling></EventHandling>
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
      },
      {
        path:'/history',
        element:<History></History>
      },
      {
        path:'/premier',
        element:<FilmPremier></FilmPremier>
      },
      {
        path:'/convocation',
        element:<ConvocationEvent></ConvocationEvent>
      },
      {
        path:'/submission',
        element:<Submission></Submission>
      },
      {
        path:'/fnf',
        element:<FilmAndFun></FilmAndFun>
      },
      {
        path:'/sholarships',
        element:<Scholarships></Scholarships>
      },
      {
        path:'/cinematography',
        element:<Cinematography></Cinematography>
      },
      {
        path:'/home',
        element:<Footer></Footer>
      },
    ]
  },
]);

export default router;