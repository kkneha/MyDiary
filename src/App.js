import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import CreatePost from "./components/js/CreatePost";
import ListPosts from "./components/js/ListPosts";
import NavBar from "./components/js/NavBar";
import ViewPost from "./components/js/ViewPost";

function App() {
  return (
    <div className='App'>
      <NavBar />
{/*   <ViewPost />
      <ListPosts />
      <CreatePost /> */}
      <Router>
        <Switch>
          <Route path="/:view"><ViewPost /></Route>
          <Route path="/create"><CreatePost /></Route>
          <Route path="/"><ListPosts /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
