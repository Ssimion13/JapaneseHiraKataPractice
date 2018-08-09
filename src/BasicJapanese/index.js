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
                    <h2 className="centeredTitle centeredText"> Section 1: <br/> Basic Japanese </h2>
                        
                            <div className="introductionThumbnail"> 
                                <Link to="/Intro">
                                    <p className="thumbnailBigTextLong centeredText"> Introduction to Japanese </p> 
                                </Link> 
                            </div>
                            <div className="introductionThumbnail">
                                <Link to="/HiraganaBasics">
                                    <p className="thumbnailBigTextLong centeredText"> Hiragana Basics </p> 
                                </Link> 
                            </div> 
                            <div className="introductionThumbnail"> 
                                <Link to="/BasicGrammar" > 
                                    <p className="thumbnailBigTextLong centeredText"> Basic Grammar </p> 
                                </Link> 
                            </div> 
                            <div className="introductionThumbnail">
                                <Link to="/BasicSentenceStructure"> 
                                    <p className="thumbnailBigTextLong centeredText"> Basic Sentence Structure </p>
                                </Link> 
                            </div> 

                </div>    


            </div>
        )
    }
}

export default BasicJapanese;