import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import UserDet from "../Components/userDet";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/userDet",
    element: <UserDet />,
  },
]);

export default router;
