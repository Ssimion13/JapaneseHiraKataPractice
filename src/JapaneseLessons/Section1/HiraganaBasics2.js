import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react'


class HiraganaBasics2 extends Component {


    render(){
        return(
            <div className="basicJapaneseMainDiv">
                    <div className="section"> 
                        Hiragana Basics 2 Under Construction! 
                    </div>
                   
                <div className="prevNextButtonHolder">
                        <Link to="/Section1/HiraganaBasics">
                            <Button> Previous </Button>
                        </Link>
                        <Link to="/JapaneseLessons">
                            <Button> To Top </Button>
                        </Link>
                        <Link to="/Section1/KatakanaBasics" >
                            <Button> Next </Button>
                        </Link>
                </div>
            </div>
        )
    }

}

export default HiraganaBasics2