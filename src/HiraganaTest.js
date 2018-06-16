import React, {Component} from "react";
import {connect} from "react-redux"
import {addCharacterToList} from "./redux"


class HiraganaTest extends Component{
    constructor(){
        super()
        this.state = {}
    
    this.addCharacterToList = this.addCharacterToList.bind(this);
    }

//hiraganaCharacters 

    addCharacterToList(character){
        this.props.addCharacterToList(character);
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

export default connect(state => state, {addCharacterToList})(HiraganaTest);