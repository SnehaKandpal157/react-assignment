import React, { Component } from "react";
import './App.css';
import Header from "./components/Header";
import Card from "./components/Card";
import TabComponent from "./components/Tab";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="App">
      <Header />
      <Chart/>
      <Card />
      <TabComponent />
    </div>
  );
}

export default App;
