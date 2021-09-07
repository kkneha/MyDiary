import "./App.css";
import CreatePost from "./components/js/CreatePost";
import ListPosts from "./components/js/ListPosts";
import NavBar from "./components/js/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ListPosts />
      <CreatePost />
    </div>
  );
}

export default App;
