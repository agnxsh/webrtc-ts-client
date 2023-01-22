import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import socketIO from "socket.io-client";

const webSocket = "http://localhost:8080";

function App() {
  useEffect(() => {
    socketIO(webSocket);
  }, []);
  return (
    <div className="App">
      <p>Web Socket test</p>
    </div>
  );
}

export default App;
