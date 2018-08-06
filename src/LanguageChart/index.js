import React, { Component } from "react"
import {connect} from "react-redux"
import { Popup } from 'semantic-ui-react'

//i don't think i need this anymore, remove on final
// const possibleCharacters = ["あ","い","う","え","お","か","き","く","け","こ","が","ぎ","ぐ","げ","ご","さ","し","す","せ","そ","ざ","じ",
// "ず","ぜ","ぞ","た","ち","つ","て","と","だ","ぢ","づ","で","ど","な","に","ぬ","ね","の","ま","み","む","め","も","は","ひ","ふ","へ","ほ","ば","び"
// ,"ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ","や","ゆ","よ","ら","り","る","れ","ろ","ん",
// "ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","ガ","ギ","グ","ゲ","ゴ","サ","シ","ス","セ","ソ","ザ","ジ","ズ","ゼ","ゾ",
// "タ","チ","ツ","テ","ト","ダ","ヂ","ヅ","デ","ド","ナ","ニ","ヌ","ネ","ノ","マ","ミ","ム","メ","モ","ハ","ヒ","フ","ヘ","ホ","バ","ビ","ブ","ベ","ボ","パ"
// ,"ピ","プ","ペ","ポ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ン"
// ]

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

        var n5VocabMap = this.props.n5Vocab.map((word, index) => {

            return (
                <div className="languageChartWord" key={index}>
                    <div className="wordChartWord"> {word.word} ({word.romaji}) </div> 
                    <div className="wordChartKanji">{word.kanji} </div>
                    <div className="wordChartGrammarType">{word.grammarType} </div>
                    <div className="wordChartMeaning"> {word.Meaning} </div> 
                    
                </div>
            )
        })
        // var n5VocabMap = possibleCharacters.map((character,index) => {
        //     console.log(character);
        //     var wordHolder = this.props.n5Vocab.filter((word) => {    
        //         console.log(word);
        //         return word.word[0] === character;
        //     })
        //     wordHolder;
        //     console.log(wordHolder);
        // })
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
                <h2 className="centeredText"> N5 Kanji List <br/> (Click on Kanji for reading)</h2>
                <div className="languageChartHolder">
                    {n5KanjiCharacterMap}
                </div>
                <div className="languageChartWordMainDiv">
                    <div className="languageChartWord">
                        <h2 className="languageChartWordTitle"> N5 Vocabulary  </h2>
                    </div>
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