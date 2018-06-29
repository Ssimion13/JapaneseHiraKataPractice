import React from "react"
import {connect} from "react-redux"
// import { Button } from 'semantic-ui-react'


function HiraganaTestComponent(props) {

    return(
        <div>
            { props.mappedQuestions.length > 0 ? 
                <div className="selectedCharacterDiv">
                    <h4> Selected Characters for Practice: </h4>
                    <div className="flexRow">
                        {props.mappedQuestions}
                    </div>
                </div>
                :null }
                {props.currentQuestion !== null ?
                <div className="quizSection">
                    <div className="scoreHolder">
                        <p> Correct: {props.numberCorrect} </p>
                        <p> Incorrect: {props.numberIncorrect} </p>
                    </div>
                    <div className="question">
                    {props.currentQuestion !== null && props.currentQuestion.type !== "Kanji"?
                        <p> { props.currentQuestion.type } </p>
                        : null }
                    {props.currentQuestion !== null && props.currentQuestion.type !== "Kanji" ?
                        <p> { props.currentQuestion.reading } </p>
                        : null }
                    {props.currentQuestion !== null && props.currentQuestion.type === "Kanji" ?
                        <div className="kanjiQuestion">
                            <h2> N5 Kanji: </h2>
                            <p> On-Reading: {props.currentQuestion.OnReading} </p>
                            <p> Kun-Reading: {props.currentQuestion.KunReading} </p>
                            <p> Meaning: {props.currentQuestion.Meaning} </p>
                        </div>
                    : null}
                    </div>
                    <div className="multipleChoiceSelections">
                        {props.mappedMultipleChoice}
                    </div>
                </div>
            : null }
        </div>
    )
}

export default connect(state => state, {})(HiraganaTestComponent);