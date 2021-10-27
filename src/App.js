import Header from "./component/Header";
import Home from "./component/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./component/Detail";
import Login from "./component/Login";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/datail/:id">
            <Detail />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
