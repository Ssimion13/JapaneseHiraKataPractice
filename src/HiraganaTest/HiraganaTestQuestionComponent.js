import React from "react"
import {connect} from "react-redux"
import { Popup, Modal, Button, Header} from 'semantic-ui-react'


function HiraganaTestQuestionComponent(props) {
    return(
        <div className="hiraganaTestComponentMain">
            { props.mappedQuestions.length > 0 ? 
            <Modal trigger={<Button className="giantButton"> Current Selected Characters </Button>}>
                <Modal.Header>Currently Selected Characters</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    <Header>Selected Characters For Practice:</Header>
                    <div className="mappedQuestions">
                        {props.mappedQuestions} <br/>
                        {props.value.indexOf("N5Vocab") !== -1 ?  <p> and N5 Vocabulary </p> : null}
                    </div>
                </Modal.Description>
                </Modal.Content>
            </Modal>
            :null }

            {props.currentQuestion !== null ?
                <div className="quizSection">
                    <div className="scoreHolder">
                        <p> Correct: {props.numberCorrect} </p>
                        <p> Incorrect: {props.numberIncorrect} </p>
                    </div>
                    <div className="question">
                        {props.currentQuestion !== null ?
                            <Popup trigger={<p> { props.currentQuestion.type } </p>}>
                                This is what type of writing the question is.
                            </Popup>    
                        : null }
                        {props.currentQuestion !== null && props.currentQuestion.type !== "Kanji" ?
                            <Popup trigger={<p> { props.currentQuestion.reading } </p>}>
                                The reading of the character in question.
                            </Popup>    
                        : null }
                    {props.currentQuestion !== null && props.currentQuestion.type === "Kanji" ?
                        <div className="kanjiQuestion">
                            <Popup trigger={<p> On-Reading: {props.currentQuestion.OnReading} </p>}>
                                The chinese pronunciation(s) (On-yomi) of the character
                            </Popup> 
                            <Popup trigger={<p> Kun-Reading: {props.currentQuestion.KunReading} </p>}>
                                The native Japanese pronunciation(s) (Kun-yomi) of the character
                            </Popup> 
                            <Popup trigger={<p> Meaning: {props.currentQuestion.Meaning} </p>}>
                                The meaning of the character.
                            </Popup>
                            </div>
                        : null}
                    {props.currentQuestion !== null && props.currentQuestion.type === "Vocab" ?
                        <div className="kanjiQuestion">
                            <Popup trigger={<p> {props.currentQuestion.word} ({props.currentQuestion.romaji}) </p>}>
                                The word in question in Hiragana/Katakana. 
                            </Popup> 

                            <Popup trigger={<p> Kanji: {props.currentQuestion.kanji} </p>}>
                                The Kanji used in the word to denote it from homophones.
                            </Popup>
                            <Popup trigger={<p> Type: {props.currentQuestion.grammarType} </p>}>
                                How the word is used grammatically in the sentence.
                            </Popup> 
                            </div>
                        : null}
                    </div>
                    <div className={props.currentQuestion.grammarType ? "multipleChoiceVocabularyMeanings"  : "multipleChoiceSelections"}>
                        {props.mappedMultipleChoice}
                    </div>
                </div>
            : null }
        </div>
    )
}

export default connect(state => state, {})(HiraganaTestQuestionComponent);