import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react'

class BasicSentenceStructure extends Component {


    render(){
        return(
            <div className="basicJapaneseMainDiv">
                <div className="textSection">
                Basic Sentence Structure
                </div>
                <Link to="/BasicJapanese" className="nextButton">
                    <Button> Previous </Button>
                </Link>
                <Link to="/BasicJapanese" className="nextButton">
                    <Button> Return to Front </Button>
                </Link>
            </div>
        )
    }

}

export default BasicSentenceStructure