import React, { Component } from "react"
import {connect} from "react-redux"

class LanguageChart extends Component {
    constructor(){
        super();
        this.state = {}
    }






    render(){
        var hiraganaCharacterMap = this.props.hiraganaCharacters.map(character => {
            return (
                <div className="languageChartCharacter"> 
                {character.character} <br/>
                {character.reading}
                </div>
            )
        })
        var katakanaCharacterMap = this.props.katakanaCharacters.map(character => {
            return (
                <div className="languageChartCharacter"> 
                {character.character} <br/>
                {character.reading}
                </div>
            )
        })
        
        return(
            <div className="languageChartMainDiv">
                <div className="languageChartHolder">
                    {hiraganaCharacterMap}
                </div>
                <div className="languageChartHolder">
                    {katakanaCharacterMap}
                </div>
            </div>
        )
    }
}


export default connect(state => state, {})(LanguageChart);