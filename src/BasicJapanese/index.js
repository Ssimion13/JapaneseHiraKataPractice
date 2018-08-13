import React, {Component} from "react";
import {Link} from "react-router-dom";
//  import axios from "axios";
//  import {katakanaCharacters} from "../redux/dictionary.js"


class BasicJapanese extends Component {
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    //this part will be removed later, this is a convenient place for me to migrate the objects inside of my dictionary into the database for access purposes
    // componentDidMount(){
    //     for (var element in katakanaCharacters){
    //         axios.post("/Katakana", katakanaCharacters[element]).then(response => {
    //              console.log(response.data)
    //         })
    //     }
    //     axios.get("/Katakana").then(response => {
    //         console.log(response.data);
    //     })
    // }


    render(){
        return(
            <div className="basicJapaneseMainDiv">
                <div className="introductionThumbnailHolder">
                    <h2 className="centeredTitle centeredText"> Section 1: <br/> Basics </h2>
                            <Link to="/Intro" className="introductionThumbnail">
                                <p className="lessonThumbnailText centeredText"> Introduction</p> 
                            </Link>
                            <Link to="/HiraganaBasics" className="introductionThumbnail">
                                <p className="lessonThumbnailText centeredText"> Hiragana</p> 
                            </Link> 
                            <Link to="/BasicGrammar" className="introductionThumbnail"> 
                                <p className="lessonThumbnailText centeredText"> Grammar </p> 
                            </Link> 
                            <Link to="/BasicSentenceStructure" className="introductionThumbnail"> 
                                <p className="lessonThumbnailText centeredText"> Sentence Structure </p>
                            </Link> 

                </div>    


            </div>
        )
    }
}

export default BasicJapanese;