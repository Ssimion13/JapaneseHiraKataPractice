import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react'


class KatakanaBasics extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div className="basicJapaneseMainDiv">
                    <div className="section"> 
                        Katakana Basics Under Construction! 
                    </div>
                   
                <div className="prevNextButtonHolder">
                        <Link to="/Section1/HiraganaBasics2">
                            <Button> Previous </Button>
                        </Link>
                        <Link to="/JapaneseLessons">
                            <Button> To Top </Button>
                        </Link>
                        <Link to="/Section1/IntroductionToKanji" >
                            <Button> Next </Button>
                        </Link>
                </div>
            </div>
        )
    }

}

export default KatakanaBasics