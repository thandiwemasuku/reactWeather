import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Frankfort" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/thandiweportia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thandiwe Masuku
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/thandiweportia"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href=".netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
