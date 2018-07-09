import React, { Component } from "react"
import {connect} from "react-redux"
import { Popup } from 'semantic-ui-react'

class LanguageChart extends Component {
    constructor(){
        super();
        this.state = {}
    }






    render(){
        var hiraganaCharacterMap = this.props.hiraganaCharacters.map(character => {
            return (
                <div key={character.character + "Hiragana"} className="languageChartCharacter"> 
                    {character.character} <br/>
                    {character.reading}
                </div>
            )
        })
        var katakanaCharacterMap = this.props.katakanaCharacters.map(character => {
            return (
                <div key={character.character + "Katakana"} className="languageChartCharacter"> 
                    {character.character} <br/>
                    {character.reading}
                </div>
            )
        })

        var n5KanjiCharacterMap = this.props.n5KanjiCharacters.map(character => {
            return (
                <Popup key={character.character + "N5Kanji"} trigger={<div  className="languageChartCharacter"> { character.character } </div>}>
                    Meaning: {character.Meaning} <br/>
                    On-Reading: {character.OnReading} <br/>
                    Kun-Reading: {character.KunReading}
                </Popup>    
            )
        })

        return(
            <div className="languageChartMainDiv">
                <h2> Hiragana </h2>
                <div className="languageChartHolder">
                    {hiraganaCharacterMap}
                </div>
                <h2> Katakana </h2>
                <div className="languageChartHolder">
                    {katakanaCharacterMap}
                </div>
                <h2> N5 Kanji List </h2>
                <div className="languageChartHolder">
                    {n5KanjiCharacterMap}
                </div>
            </div>
        )
    }
}


export default connect(state => state, {})(LanguageChart);