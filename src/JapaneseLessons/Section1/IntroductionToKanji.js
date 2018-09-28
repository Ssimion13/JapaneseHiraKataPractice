import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react'


class IntroductionToKanji extends Component {


    render(){
        return(
            <div className="basicJapaneseMainDiv">
                    <div className="section"> 
                        Introduction To Kanji Under Construction! 
                    </div>
                   
                <div className="prevNextButtonHolder">

                    <Link to="/Section1/KatakanaBasics" className="nextButton">
                        <Button> Previous </Button>
                    </Link>
                    <Link to="/JapaneseLessons" className="nextButton">
                        <Button> Return to Front </Button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default IntroductionToKanji