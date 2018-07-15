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

        var n5VocabMap = this.props.n5Vocab.map(word => {
            return (
                <div className="languageChartWord">
                    <div className="wordChartWord"> {word.word} ({word.romaji}) </div> 
                    <div className="wordChartKanji">{word.kanji} </div>
                    <div className="wordChartGrammarType">{word.grammarType} </div>
                    <div className="wordChartMeaning"> {word.Meaning} </div> 
                    
                </div>
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
                <div className="languageChartWordMainDiv">
                    <div className="languageChartWord">
                        <div className="wordChartWordTop"> Word <br/> (w/ Romaji) </div> 
                        <div className="wordChartKanji"> Kanji </div>
                        <div className="wordChartGrammarType"> Grammar Type </div>
                        <div className="wordChartMeaning"> Meaning </div> 
                    </div>
                    {n5VocabMap}
                </div>
            </div>
        )
    }
}


export default connect(state => state, {})(LanguageChart);