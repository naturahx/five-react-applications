import React, { useEffect, useState } from "react";
import "./App.scss";
import Collection from "./Collection";

function App() {
  const [collections, setCollections] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://65aea9dc1dfbae409a754dec.mockapi.io/pphotos")
      .then((res) => res.json())
      .then((json) => setCollections(json))
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {collections
          .filter((obj) => {
            console.log(obj)
            return obj.name.toLowerCase().includes(value.toLowerCase());
          })
          .map((obj, index) => {
            <Collection
              key={index}
              name={obj.name}
              images={obj.photos}
            />;
          })}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
