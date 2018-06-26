import React, {Component} from "react";
import {connect} from "react-redux"
import {addCharacterToList, removeCharacterFromList, clearCharacters, createMultipleChoice, addCorrect, addIncorrect} from "./redux"
import { Button, Header, Modal} from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'


const languageOptions = [ { key: 'Hiragana', value: 'Hiragana', text: 'Hiragana'}, {key:"Katakana", value:"Katakana",text:"Katakana"},
{key:"N5Kanji", value:"N5Kanji", text:"N5 Kanji"} ]
const initialState = { value: [] }

class HiraganaTest extends Component{
    constructor(){
        super()
        this.state = {...initialState}
    
    this.addCharacterToList = this.addCharacterToList.bind(this)
    this.clearCharacters = this.clearCharacters.bind(this);
    this.createMultipleChoice = this.createMultipleChoice.bind(this);
    }

    

    handleChange = (e, { value }) => this.setState({ value })

    addCharacterToList(character){
        if(!this.props.currentStudyList.includes(character)){
            this.props.addCharacterToList(character);
        } else {
            this.props.removeCharacterFromList(character)
        }
    }
    clearCharacters = () => {
        this.props.clearCharacters();
    }
    createMultipleChoice = () => {
        var currentArray = [...this.props.currentStudyList]
        var j, x, i;
            for (i = currentArray.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = currentArray[i];
                currentArray[i] = currentArray[j];
                currentArray[j] = x;
        }
        var randomNumber = Math.floor(Math.random() * currentArray.length)
        console.log(randomNumber);
    this.props.createMultipleChoice(currentArray, randomNumber)
    }

    checkAnswer = (reading) => {
        if(this.props.currentQuestion.reading === reading){
            this.props.addCorrect();
            this.createMultipleChoice();
        } else {
            this.props.addIncorrect();
        }
    }



    render(){
        const mappedHiraganaCharacters = this.props.hiraganaCharacters.map((character,i) => {

            return(
                <div key={character+i} name={character.character} onClick={()=> this.addCharacterToList(character)} className={this.props.currentSelectedCharacters.includes(character.character) ? "selectedIndividualCharacters" : "individualCharacters"}>
                  {character.character}
                </div>
            )
        });

        const mappedKatakanaCharacters = this.props.katakanaCharacters.map((character,i) => {
            return(
                <div key={character+i} onClick={()=> this.addCharacterToList(character)} className={this.props.currentSelectedCharacters.includes(character.character) ? "selectedIndividualCharacters" : "individualCharacters"}>
                    {character.character}
                </div>
            )
        });

        const mappedN5KanjiCharacters = this.props.n5KanjiCharacters.map((character,i) => {
            return(
                <div key={character+i} onClick={()=> this.addCharacterToList(character)} className={this.props.currentSelectedCharacters.includes(character.character) ? "selectedIndividualCharacters" : "individualCharacters"}>
                    {character.character}
                </div>
            )
        });

        const mappedQuestions = this.props.currentStudyList.map((character,i) => {
            return(
                <div key={"x"+character+i} className="individualCharacters">
                {character.character}
                </div>
            )
        });
        const mappedMultipleChoice = this.props.multipleChoice.map((character, i)=> {
            return(
            <div key={"y"+character+i} className="individualQuestionCharacters">
                <Button className="questionButton" onClick={()=> this.checkAnswer(character.reading)}> {character.character} </Button>
            </div>)
        })
        
        return(
            <div className="hiraganaTestMain">
                <Modal trigger={<Button> Instructions </Button>}>
                    <Modal.Header>How To Use</Modal.Header>
                    <Modal.Content>
                    <Modal.Description>
                        <Header>Using the Japanese Quiz App</Header>
                        <p>Use the dropdown list at the top of the page to select what you would like to review.</p>
                        <p>Once selected, click any characters you would like to use, or click "all" to select all of that type.</p>
                        <p> Once you are ready to begin, click start and the quiz will appear. Click the correct character listed below the question to answer! </p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
                <div className="alphabetDropdown">
                    <Dropdown placeholder="Select Hiragana or Katakana"  onChange={this.handleChange} fluid multiple search selection options ={languageOptions}/>
                </div>
                {this.state.value.includes("Hiragana") ?
                    <div className="mappedCharacters">
                        {mappedHiraganaCharacters}
                    </div>
                : null}
                {this.state.value.includes("Katakana") ?
                    <div className="mappedCharacters">
                        {mappedKatakanaCharacters}
                    </div>
                : null}
                {this.state.value.includes("N5Kanji") ?
                    <div className="mappedCharacters">
                        {mappedN5KanjiCharacters}
                    </div>
                : null}                    
                <div className="buttonHolder"> 
                    <Button onClick={this.clearCharacters}> Clear </Button>
                    <Button onClick={this.createMultipleChoice}> Start </Button>
                </div>
                { mappedQuestions.length > 0 ? 
                <div className="selectedCharacterDiv">
                    <h4> Selected Characters for Practice: </h4>
                    <div className="flexRow">
                        {mappedQuestions}
                    </div>
                </div>
                :null }
                {this.props.currentQuestion !== null ?
                <div className="quizSection">
                    <div className="scoreHolder">
                        <p> Correct: {this.props.numberCorrect} </p>
                        <p> Incorrect: {this.props.numberIncorrect} </p>
                    </div>
                    <div className="question">
                    {this.props.currentQuestion !== null && this.props.currentQuestion.type !== "Kanji"?
                        <p> {this.props.currentQuestion.type} </p>
                        : null }
                    {this.props.currentQuestion !== null && this.props.currentQuestion.type !== "Kanji" ?
                        <p> {this.props.currentQuestion.reading} </p>
                        : null }
                    {this.props.currentQuestion !== null && this.props.currentQuestion.type === "Kanji" ?
                        <div className="kanjiQuestion">
                            <h2> N5 Kanji: </h2>
                            <p> On-Reading: {this.props.currentQuestion.OnReading} </p>
                            <p> Kun-Reading: {this.props.currentQuestion.KunReading} </p>
                            <p> Meaning: {this.props.currentQuestion.Meaning} </p>
                        </div>
                    : null}
                    </div>
                    <div className="multipleChoiceSelections">
                        {mappedMultipleChoice}
                    </div>
                </div>
                : null }
            </div>
        )
    }
}

export default connect(state => state, {addCharacterToList, removeCharacterFromList, clearCharacters, addCorrect, addIncorrect, createMultipleChoice})(HiraganaTest);