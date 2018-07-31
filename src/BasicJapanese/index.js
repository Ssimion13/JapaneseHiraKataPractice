import React, {Component} from "react";
import {Link} from "react-router-dom";
 import axios from "axios";
 import {N5Vocab} from "../redux/dictionary.js"


class BasicJapanese extends Component {
    constructor(){
        super();
        this.state = {}
    }
    //this part will be removed later, this is a convenient place for me to migrate the objects inside of my dictionary into the database for access purposes
    componentDidMount(){
        // for (var element in N5Vocab){
        //     axios.post("/Vocab", N5Vocab[element]).then(response => {
        //          console.log(response.data)
        //     })
        // }
        // axios.get("/Vocab").then(response => {
        //     console.log(response.data);
        // })
    }


    render(){
        return(
            <div className="basicJapaneseMainDiv">
                <h2> Basic Japanese </h2>
                <ol>
                    <li> <Link to="/Intro"> Intro </Link> </li>
                    <li> <Link to="/HiraganaBasics"> Hiragana Basics </Link> </li>
                    <li> <Link to="/BasicGrammar" > Basic Grammar </Link> </li>
                    <li> <Link to="/BasicSentenceStructure"> Basic Sentence Structure </Link> </li>
                </ol>
                    


            </div>
        )
    }
}

export default BasicJapanese;