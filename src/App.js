import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import axios from "axios";


class App extends Component {
  constructor(){
    super();
    
  }




  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
