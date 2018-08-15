import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react'


class BasicGrammar extends Component {


    render(){
        return(
            <div className="basicJapaneseMainDiv">
                <div className="textSection">
                Basic Grammar
                </div>
            
                <div className="prevNextButtonHolder">
                    <Link to="/Section1/HiraganaBasics" className="nextButton">
                        <Button> Previous </Button>
                    </Link>
                    <Link to="/BasicJapanese" className="nextButton">
                        <Button> Return to Front </Button>
                    </Link>
                    <Link to="/Section1/BasicSentenceStructure" className="nextButton">
                        <Button> Next </Button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default BasicGrammar