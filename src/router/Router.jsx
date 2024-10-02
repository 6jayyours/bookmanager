import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../components/Landing";
import Settings from "../components/Settings";
import AddBook from "../components/AddBook";
import AllBooks from "../components/AllBooks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
          {
            index: true, 
            element: <Landing />, 
          },
          {
            path: "settings", 
            element: <Settings />, 
            children: [
              {
                path: "addbook", 
                element: <AddBook />, 
              },
              {
                path: "allbooks", 
                element: <AllBooks/>, 
              },
              
            ],
          },
        ],
      },
]);

export default router;