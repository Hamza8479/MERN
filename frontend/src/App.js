import "./App.css";
import Register from "./pages/auth/Register";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
