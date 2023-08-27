import Home from "./routes/Home"
import Detail from "./routes/Detail";
import "./styles.css";

import { createBrowserRouter} from "react-router-dom"

console.log(`${process.env.PUBLIC_URL}`)
const App = createBrowserRouter([
  { 
    path: "/",
    element:<Home />,
  },
  {
    path: "/detail/:id",
    element:<Detail />,
  }
], { basename:`${process.env.PUBLIC_URL}`});

export default App;


