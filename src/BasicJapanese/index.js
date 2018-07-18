import React, {Component} from "react";
import axios from "axios";
import {hiraganaCharacters} from "../redux/dictionary.js"

class BasicJapanese extends Component {
    constructor(){
        super();
        this.state = {}
    }
    //this part will be removed later, this is a convenient place for me to migrate the objects inside of my dictionary into the database for access purposes
    componentDidMount(){
        // for (var element in hiraganaCharacters){
        //     axios.post("/Hiragana", hiraganaCharacters[element]).then(response => {
        //          console.log(response.data)
        //     })
        // }
    }


    render(){
        return(
            <div className="basicJapaneseMainDiv">
                Under Construction, please wait gently!
            </div>
        )
    }
}

export default BasicJapanese;