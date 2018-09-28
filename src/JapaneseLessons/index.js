import React, {Component} from "react";
import {Link} from "react-router-dom";
//  import axios from "axios";
//  import {katakanaCharacters} from "../redux/dictionary.js"


class JapaneseLessons extends Component {
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
                    <h2 className="centeredTitle centeredText"> Section 1: <br/> Basic Written Japanese </h2>
                        <h2 className="centeredTitle"> Note: These sections' content is still WIP! </h2>
                            <Link to="/Section1/Intro" className="introductionThumbnail">
                                <p className="lessonThumbnailText centeredText"> Introduction</p> 
                            </Link>
                            <Link to="/Section1/HiraganaBasics" className="introductionThumbnail">
                                <p className="lessonThumbnailText centeredText"> Hiragana Basics </p> 
                            </Link> 
                            <Link to="/Section1/HiraganaBasics2" className="introductionThumbnail"> 
                                <p className="lessonThumbnailText centeredText"> Hiragana Basics (2) </p>
                            </Link> 
                            <Link to="/Section1/Katakana" className="introductionThumbnail"> 
                                <p className="lessonThumbnailText centeredText"> Katakana Basics </p> 
                            </Link> 
                            <Link to="/Section1/IntroductionToKanji" className="introductionThumbnail"> 
                                <p className="lessonThumbnailText centeredText"> Introduction to Kanji </p> 
                            </Link> 
                </div>    
                <div className="introductionThumbnailHolder">
                    <h2 className="centeredTitle centeredText"> Section 2: <br/> Basic Japanese Grammar </h2>
                        <h2 className="centeredTitle"> Note: These sections are still  entirely WIP! </h2>
                            <Link to="/Section2/BasicSentenceStructure" className="introductionThumbnail"> 
                                <p className="lessonThumbnailText centeredText"> Basic Sentence Structure </p>
                            </Link> 
                            <Link to="/Section2/BasicGrammar" className="introductionThumbnail"> 
                                <p className="lessonThumbnailText centeredText"> Grammar </p> 
                            </Link> 
                </div>  


            </div>
        )
    }
}

export default JapaneseLessons;