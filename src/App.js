import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>hello from app</h1>
      {/* Container for swap functionality */}
      <div className="app__videos">
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
