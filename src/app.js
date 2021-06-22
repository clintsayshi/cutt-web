import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Notifs from "./pages/notifs";
import Profile from "./pages/profile";
import NewPost from "./pages/NewPost";
import PostModal from "./components/post-modal";

import styles from "./styles/app.module.scss";

function App() {
  const modal = useSelector((state) => state.actions.modal);
  console.log(modal);
  return (
    <Router>
      <div id={styles.app}>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route path="/notifs" exact component={Notifs} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/create_post" exact component={NewPost} />
        </Switch>
        {modal && <PostModal />}
        {modal && <Overlay />}
      </div>
    </Router>
  );
}

export default App;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;
  opacity: 0.8;
  z-index: 9;
  height: 100%;
`;