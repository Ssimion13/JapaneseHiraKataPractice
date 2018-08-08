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
                    <h2 className="centeredTitle centeredText"> Basic Japanese </h2>
                        <Link to="/Intro">
                            <div className="thumbnail"> 
                                <p className="thumbnailBigTextLong centeredText"> Introduction to Japanese </p> 
                            </div>
                        </Link> 
                        <Link to="/HiraganaBasics">
                            <div className="thumbnail">
                                <p className="thumbnailBigTextLong centeredText"> Hiragana Basics </p> 
                            </div> 
                        </Link> 
                        <Link to="/BasicGrammar" > 
                            <div className="thumbnail"> 
                                <p className="thumbnailBigTextLong centeredText"> Basic Grammar </p> 
                            </div> 
                        </Link> 
                        <Link to="/BasicSentenceStructure">
                            <div className="thumbnail"> 
                                <p className="thumbnailBigTextLong centeredText"> Basic Sentence Structure </p>
                            </div> 
                        </Link> 
                </div>    


            </div>
        )
    }
}

export default BasicJapanese;