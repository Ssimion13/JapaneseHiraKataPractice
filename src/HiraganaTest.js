import React, {Component} from "react";
import {connect} from "react-redux"
import {addCharacterToList, removeCharacterFromList, clearCharacters, createMultipleChoice} from "./redux"


class HiraganaTest extends Component{
    constructor(){
        super()
    
    this.addCharacterToList = this.addCharacterToList.bind(this)
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
        console.log("hi");
        this.props.clearCharacters();
    }
    createMultipleChoice = () => {
        var currentArray = [...this.props.currentStudyList]
        var j, x, i;
            for (i = currentArray.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                console.log(j)
                x = currentArray[i];
                currentArray[i] = currentArray[j];
                currentArray[j] = x;
        }
        var randomNumber = Math.floor(Math.random() * currentArray.length - 1)
    this.props.createMultipleChoice(currentArray, randomNumber)
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
            <div key={"y"+character+i} className="individualCharacters">
                {character.character}
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
                    <div className="selectedCharacterDiv">
                        <div className="multipleChoiceSelections">
                            {this.props.currentQuestion}
                            {mappedMultipleChoice}
                        </div>
                    </div>
            </div>
        )
    }
}

export default connect(state => state, {addCharacterToList, removeCharacterFromList, clearCharacters, createMultipleChoice})(HiraganaTest);