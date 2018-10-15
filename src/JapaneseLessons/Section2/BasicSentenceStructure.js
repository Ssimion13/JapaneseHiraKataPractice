import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react'

class BasicSentenceStructure extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div className="basicJapaneseMainDiv">
                <div className="textSection">
                    <div className="section">
                        <h2 className="centeredTitle"> Basic Sentence Structure </h2>
                        <p> Japanese grammar uses the basic standard of "Subject Object Verb", as opposed to English's "Subject Verb Object."
                            For example, in English, we would say "I walk the dog", whereas in Japanese, it would be "私は散歩をする。 (I the dog walk)." 
                        </p>
                    </div>
                </div>
                <div className="prevNextButtonHolder">

                    <Link to="/JapaneseLessons" className="nextButton">
                        <Button> To Top </Button>
                    </Link>
                    <Link to="/Section2/BasicGrammar" className="nextButton">
                            <Button> Next </Button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default BasicSentenceStructure