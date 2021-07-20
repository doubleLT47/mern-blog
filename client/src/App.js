
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Setting from "./pages/settings/Setting"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { Context } from "./context/Context"
import { useContext } from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
        <Topbar />
        <Switch>
          <Route path="/" exact >
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/write" exact >
            {user ? <Write />: <Login /> }
          </Route>
          <Route path="/setting" exact >
            {user ? <Setting /> : <Login />}
          </Route>
          <Route path="/login" exact >
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/register" exact >
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/post/:id" exact >
            {user? <Single /> : <Login />}
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
