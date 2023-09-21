import "./styles/reset.css";
import "./styles/global.css";
import TopNav from "./components/TopNav/TopNav";

{
  /*React Router */
}
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="layout">
      <TopNav />
      <Home />
    </div>
  );
}

export default App;
