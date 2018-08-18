import React, { Component } from 'react';
import Sidebar from "./Sidebar";
// import axios from "axios";
// import {connect} from "react-redux";
// import {getDataFromServer} from "./redux"
// import { withRouter } from 'react-router-dom'


class App extends Component {
  // constructor(){
  //   super();
  //   // this.getDataFromServer = this.getDataFromServer.bind(this);
  // }
  componentDidMount(){
    document.title = 'Japanese On The Go!'
    //this.getDataFromServer();
  }

//   getDataFromServer(){
//     axios.get("/Kanji")
//         .then(response => {
//         this.props.getDataFromServer(response.data, "n5KanjiCharacters");
//     })
//     axios.get("/Vocab")
//         .then(response => {

//         this.props.getDataFromServer(response.data, "n5Vocab");
//     })
//   }

  render() {
    return (
      <div className="App">z
        <Sidebar />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return state;
// }

export default App;

//  export default withRouter(connect(mapStateToProps, {getDataFromServer})(App));
