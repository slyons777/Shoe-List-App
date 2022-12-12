import React, { useEffect, useState } from "react";
import MainNav from "./components/MainNav";
import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [shoeData, setShoeData] = useState([]);
  //get some data
  useEffect(() => {
    const client_id = "rLq9bvi_8PHd4HDf1G24bOnATPnByqoMjRtvGbFxMf0";
    const searchStr = "shoes";
    const resource = `https://api.unsplash.com/search/photos?query=${searchStr}&per_page=2&client_id=${client_id}`;

    fetch(resource)
      .then((res) => res.json())
      .then((data) => {
        setShoeData(data.results);
      });
  }, []);

  return (
    <div className="App">
      {/* Add a navbar*/}
      <MainNav />
      {/*Add card container */}
      <div className="card-container">
        {shoeData.map((data, index) => (
          <p key={index}>{data.title}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
