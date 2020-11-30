import "./App.css";
import Header from "./components/Header";
import NewsFeed from "./components/NewsFeed";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      <div class="app__header">
        <Header />
      </div>
      <div class="app__body">
        <div class="app__container">
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
