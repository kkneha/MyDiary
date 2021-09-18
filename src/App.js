import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CreatePost from "./components/js/CreatePost";
import ListPosts from "./components/js/ListPosts";
import NavBar from "./components/js/NavBar";
import ViewPost from "./components/js/ViewPost";
import EditPost from "./components/js/EditPost";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Switch>
          <Route path='/create'>
            <CreatePost />
          </Route>
          <Route path='/edit/:int'>
            <EditPost />
          </Route>
          <Route path='/:view'>
            <ViewPost />
          </Route>
          <Route path='/'>
            <ListPosts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
