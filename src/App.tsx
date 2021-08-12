import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const names = ["Ignat", "Anna", "Anton", "Dima"]
  const names2 = [{name: "Ignat"}, {name: "Anna"}, {name: "Anton"}, {name:"Dima"}]
  const liNames = names.map(h => <li>{h}</li>)
  const liNames2 = names2.map(h => <li>{h.name}</li>)

  return (
    <div className="App">
      {liNames}
      {liNames2}
    </div>
  );
}

export default App;
