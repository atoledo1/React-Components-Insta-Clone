import React from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage.js";
import SearchBar from "./components/SearchBar/SearchBarContainer.js";

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <PostsPage />
    </div>
  );
};

export default App;
