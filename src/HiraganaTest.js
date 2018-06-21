import React, {Component} from "react";
import {connect} from "react-redux"
import {addCharacterToList, removeCharacterFromList, clearCharacters, createMultipleChoice, addCorrect, addIncorrect} from "./redux"
import { Button } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'


const languageOptions = [ { key: 'Hiragana', value: 'Hiragana', text: 'Hiragana'}, {key:"Katakana", value:"Katakana",text:"Katakana"} ]
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
                    <div className="buttonHolder"> 
                        <Button onClick={this.clearCharacters}> Clear </Button>
                        <Button onClick={this.createMultipleChoice}> Start </Button>
                    </div>
                    <div className="selectedCharacterDiv">
                        <h4> Selected Characters for Practice: </h4>
                        <div className="flexRow">
                            {mappedQuestions}
                        </div>
                    </div>
                    <div className="quizSection">
                        <div className="scoreHolder">
                            <p> Correct: {this.props.numberCorrect} </p>
                            <p> Incorrect: {this.props.numberIncorrect} </p>
                        </div>
                        <div className="question">
                        {this.props.currentQuestion !== null ?
                            <p> {this.props.currentQuestion.type} </p>
                            : null }
                        {this.props.currentQuestion !== null ?
                            <p> {this.props.currentQuestion.reading} </p>
                            : null }
                        </div>
                        <div className="multipleChoiceSelections">
                            {mappedMultipleChoice}
                        </div>
                    </div>
            </div>
        )
    }
}

export default connect(state => state, {addCharacterToList, removeCharacterFromList, clearCharacters, addCorrect, addIncorrect, createMultipleChoice})(HiraganaTest);