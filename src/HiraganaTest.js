import React, {Component} from "react";
import {connect} from "react-redux"
import {addCharacterToList, removeCharacterFromList, clearCharacters} from "./redux"


class HiraganaTest extends Component{
    constructor(){
        super()
    
    this.addCharacterToList = this.addCharacterToList.bind(this)
    }

    
//hiraganaCharacters 

    addCharacterToList(character){
        if(!this.props.currentStudyList.includes(character)){
            console.log("blah")
            this.props.addCharacterToList(character);
        } else {
            console.log("bleh");
            this.props.removeCharacterFromList(character)
            var newStudyList = this.props.currentStudyList.filter(x => {
                return x !== character
            })
        }
    }
    clearCharacters = () => {
        console.log("hi");
        this.props.clearCharacters();
    }


    render(){
        const mappedHiraganaCharacters = this.props.hiraganaCharacters.map((character,i) => {
            return(
                <div key={character+i} onClick={()=> this.addCharacterToList(character)} className="individualCharacters">
                    {character}
                </div>
            )
        });
        const mappedQuestions = this.props.currentStudyList.map((character,i) => {
            return(
                <div key={"x"+character+i} className="individualCharacters">
                {character}
                </div>
            )
        });
        return(
            <div className="hiraganaTestMain">
                    <div className="mappedCharacters">
                        {mappedHiraganaCharacters}
                    </div>
                    <div className="buttonHolder"> 
                        <button onClick={()=> this.clearCharacters()}> Clear </button>
                    </div>
                    <div className="selectedCharacterDiv">
                        <h4> Selected Characters for Practice: </h4>
                        <div className="flexRow">
                            {mappedQuestions}
                        </div>
                    </div>
            </div>
        )
    }
}

export default connect(state => state, {addCharacterToList, removeCharacterFromList, clearCharacters})(HiraganaTest);