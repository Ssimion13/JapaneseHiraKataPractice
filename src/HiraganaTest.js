import React, {Component} from "react";
import {connect} from "react-redux"
import {addCharacterToList, removeCharacterFromList, clearCharacters, createMultipleChoice, addCorrect, addIncorrect} from "./redux"


class HiraganaTest extends Component{
    constructor(){
        super()
    
    this.addCharacterToList = this.addCharacterToList.bind(this)
    this.clearCharacters = this.clearCharacters.bind(this);
    this.createMultipleChoice = this.createMultipleChoice.bind(this);
    }

    
//hiraganaCharacters 

    addCharacterToList(character){
        if(!this.props.currentStudyList.includes(character)){
            this.props.addCharacterToList(character);
        } else {
            console.log("bleh");
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
        if(this.props.currentQuestion === reading){
            this.props.addCorrect();
            this.createMultipleChoice();
        } else {
            this.props.addIncorrect();
        }
    }



    render(){
        const mappedHiraganaCharacters = this.props.hiraganaCharacters.map((character,i) => {
            return(
                <div key={character+i} onClick={()=> this.addCharacterToList(character)} className="individualCharacters">
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
                <button className="questionButton" onClick={()=> this.checkAnswer(character.reading)}> {character.character} </button>
            </div>)
        })
        return(
            <div className="hiraganaTestMain">
                    <div className="mappedCharacters">
                        {mappedHiraganaCharacters}
                    </div>
                    <div className="buttonHolder"> 
                        <button onClick={this.clearCharacters}> Clear </button>
                        <button onClick={this.createMultipleChoice}> Start </button>
                    </div>
                    <div className="selectedCharacterDiv">
                        <h4> Selected Characters for Practice: </h4>
                        <div className="flexRow">
                            {mappedQuestions}
                        </div>
                    </div>
                    <div className="quizSection">
                        <div className="scoreHolder">
                            <h3> Correct: {this.props.numberCorrect} </h3>
                            <h3> Incorrect: {this.props.numberIncorrect} </h3>
                        </div>
                        <div className="question">
                            {this.props.currentQuestion}
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