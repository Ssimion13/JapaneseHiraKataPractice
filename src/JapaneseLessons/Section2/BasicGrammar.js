import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react'


class BasicGrammar extends Component {


    render(){
        return(
            <div className="basicJapaneseMainDiv">
                    <div className="section"> 
                        Under Construction! 
                    </div>
                   
                <div className="prevNextButtonHolder">
                    <Link to="/Section2/BasicSentenceStructure" className="nextButton">
                        <Button> Previous </Button>
                    </Link>
                    <Link to="/JapaneseLessons" className="nextButton">
                        <Button> Return to Front </Button>
                    </Link>
                    <Link to="/Section2/SOMETHING" className="nextButton">
                        <Button> Next </Button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default BasicGrammar