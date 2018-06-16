import React, {Component} from "react";
import {connect} from "react-redux"
import {addCharacterToList, removeCharacterFromList} from "./redux"


class HiraganaTest extends Component{
    constructor(){
        super()
        this.state = {}
    
    this.addCharacterToList = this.addCharacterToList.bind(this)
    }

//hiraganaCharacters 

    addCharacterToList(character){
        console.log(this.state);
        if(!this.state[character]){
            this.props.addCharacterToList(character);
            this.setState({
                [character]: true
            })
        } else {
            this.props.removeCharacterFromList(character)
            this.setState({
                [character]: false
            })
        }
    }


    render(){
        const mappedHiraganaCharacters = this.props.hiraganaCharacters.map((character,i) => {
            return(
                <div key={character+i} onClick={()=> this.addCharacterToList(character)} className="individualCharacters">
                    {character}
                </div>
            )
        })
        return(
            <div className="hiraganaTestMain">
                    <div className="mappedCharacters">
                        {mappedHiraganaCharacters}
                        {this.props.currentStudyList}
                    </div>
            </div>
        )
    }
}

export default connect(state => state, {addCharacterToList, removeCharacterFromList})(HiraganaTest);