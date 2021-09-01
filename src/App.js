import './App.css';
import CreatePost from './components/CreatePost';
import ListPosts from './components/ListPosts';

function App() {
  return (
    <div className="App">
      <ListPosts />
      <CreatePost />
    </div>
  );
}

export default App;
