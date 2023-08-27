import Home from "./routes/Home"
import Detail from "./routes/Detail";

import { createBrowserRouter} from "react-router-dom"


const App = createBrowserRouter([
  { 
    path: "/",
    element:<Home />,
  },
  {
    path: "detail/:id",
    element:<Detail />,
  }
]);

export default App;


