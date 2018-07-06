import React, {Component} from "react";
import {connect} from "react-redux"
import {addCharacterToList, removeCharacterFromList, addAllCharacters, clearCharacters, createMultipleChoice, addCorrect, addIncorrect} from "./redux"
import { Button, Header, Modal} from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import HiraganaTestComponent from "./HiraganaTestComponent";



const languageOptions = [ { key: 'Hiragana', value: 'Hiragana', text: 'Hiragana'}, {key:"Katakana", value:"Katakana",text:"Katakana"},
{key:"N5Kanji", value:"N5Kanji", text:"N5 Kanji"}, {key:"N5Vocab", value:"N5Vocab", text:"N5 Vocabulary"} ]
const initialState = { 
    value: [],
    handleModalClose: false,
    selectedAccounts: ""
    }

class HiraganaTest extends Component{
    constructor(){
        super()
        this.state = {...initialState}
    
    this.addCharacterToList = this.addCharacterToList.bind(this)
    this.clearCharacters = this.clearCharacters.bind(this);
    this.createMultipleChoice = this.createMultipleChoice.bind(this);
    this.addAllCharacters = this.addAllCharacters.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    }

    componentDidMount() {
        this.props.clearCharacters();
    }

    handleChange = (e, { value }) => this.setState({ value })

    handleModalOpen = () => this.setState({handleClose: true})
    handleModalClose = () => this.setState({handleClose: false})

    addCharacterToList(character){
        if(!this.props.currentStudyList.includes(character)){
            this.props.addCharacterToList(character);
        } else {
            this.props.removeCharacterFromList(character)
        }
    }

    addAllCharacters(){
        var newStudyListArray = []
        var newSelectedArray = []
            if(this.state.value.includes("Hiragana")){
                this.props.hiraganaCharacters.forEach(character => {
                    newSelectedArray = newSelectedArray.concat(character.character)
                    newStudyListArray = newStudyListArray.concat(character)
                    
                })
            }
            if(this.state.value.includes("Katakana")){
                this.props.katakanaCharacters.forEach(character => {
                    newSelectedArray = newSelectedArray.concat(character.character)
                    newStudyListArray = newStudyListArray.concat(character)
                })
            }
            if(this.state.value.includes("N5Kanji")){
                this.props.n5KanjiCharacters.forEach(character => {
                    newSelectedArray = newSelectedArray.concat(character.character)
                    newStudyListArray = newStudyListArray.concat(character)
                })
            }
            if(this.state.value.includes("N5Vocab")){
                this.props.n5Vocab.forEach(word => {
                    newSelectedArray = newSelectedArray.concat(word.word)
                    newStudyListArray = newStudyListArray.concat(word)
                })
            }
            console.log(newSelectedArray);
            console.log(newStudyListArray);
        this.props.addAllCharacters(newStudyListArray, newSelectedArray);
        
    }

    clearCharacters = () => {
        this.props.clearCharacters();
        this.setState({...initialState});
    }
    createMultipleChoice = () => {
        if(this.props.currentStudyList.length === 0){
            alert("Please add characters to the study list!")
            return;
        }
        var currentArray = [...this.props.currentStudyList];
        var randomNumber = Math.floor(Math.random() * currentArray.length)
        while(currentArray[randomNumber] === this.props.currentQuestion){
            randomNumber = Math.floor(Math.random() * currentArray.length)
        }
        var randomQuestion = currentArray[randomNumber]
        currentArray.splice(currentArray.indexOf(randomQuestion), 1)

        var multipleChoiceArray = currentArray.splice(currentArray[0], 4)
        var newArray = [randomQuestion, ...multipleChoiceArray]
        var j, x, i;
        for (i = newArray.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = x;
    }
    this.props.createMultipleChoice(newArray, randomQuestion)
    }

    checkAnswer = (answer) => {
        if(this.props.currentQuestion.reading){
            if(this.props.currentQuestion.reading === answer){
                this.props.addCorrect();
                this.createMultipleChoice();
            } else {
                this.props.addIncorrect();
                this.createMultipleChoice();
            }
        }
        else if(this.props.currentQuestion.OnReading){
            if(this.props.currentQuestion.OnReading === answer){
                this.props.addCorrect();
                this.createMultipleChoice();
            } else {
                this.props.addIncorrect();
                this.createMultipleChoice();
            }
        }
        else if(this.props.currentQuestion.grammarType){
            if(this.props.currentQuestion.word === answer){
                this.props.addCorrect();
                this.createMultipleChoice();
            } else {
                this.props.addIncorrect();
                this.createMultipleChoice();
            }
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

        const mappedN5KanjiCharacters = this.props.n5KanjiCharacters.map((character,i) => {
            return(
                <div key={character+i} onClick={()=> this.addCharacterToList(character)} className={this.props.currentSelectedCharacters.includes(character.character) ? "selectedIndividualCharacters" : "individualCharacters"}>
                    {character.character}
                </div>
            )
        });
        const mappedN5VocabCharacters = this.props.n5Vocab.map((character,i) => {
            return(
                <div key={character+i} onClick={()=> this.addCharacterToList(character)} className={this.props.currentSelectedCharacters.includes(character.character) ? "selectedIndividualWord" : "individualWord"}>
                    {character.word}
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
        const mappedMultipleChoice = this.props.multipleChoice.map((character, i) => {
            console.log(character);
            if(character.reading){
                return(
                    <div key={"y"+character+i} className="individualQuestionCharacters">
                        <Button className="questionButton" onClick={()=> this.checkAnswer(character.reading)}> {character.character} </Button>
                    </div>)
            } 
            else if(character.OnReading){
                return(
                    <div key={"y"+character+i} className="individualQuestionCharacters">
                        <Button className="questionButton" onClick={()=> this.checkAnswer(character.OnReading)}> {character.character} </Button>
                    </div>)
            }
            else if(character.grammarType){
                return(
                    <div key={"y"+character+i} className="individualQuestionMeanings">
                        <Button className="questionButton" onClick={()=> this.checkAnswer(character.word)}> {character.Meaning} </Button>
                    </div>)
            }
        })

        
        return(
            <div className="hiraganaTestMain">
                <Modal trigger={<Button> Instructions </Button>}>
                    <Modal.Header>How To Use</Modal.Header>
                    <Modal.Content>
                    <Modal.Description>
                        <Header>Using the Japanese Quiz App</Header>
                        <p>Use the dropdown list at the top of the page to select what you would like to review.</p>
                        <p>Once selected, click any characters you would like to use, or click "all" to select all of that type.</p>
                        <p> Once you are ready to begin, click start and the quiz will appear. Click the correct character listed below the question to answer! </p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
                <div className="alphabetDropdown">
                    <Dropdown placeholder="Select Characters For Review"  value = {this.state.value} onChange={this.handleChange} fluid multiple search selection options ={languageOptions}/>
                </div>
                {this.state.value.includes("Hiragana") && this.state.value.length === 1 ?
                    <div className="mappedCharacters">
                        {mappedHiraganaCharacters}
                    </div>
                : null}
                {this.state.value.includes("Katakana") && this.state.value.length === 1 ?
                    <div className="mappedCharacters">
                        {mappedKatakanaCharacters}
                    </div>
                : null}
                {this.state.value.includes("N5Kanji") && this.state.value.length === 1 ?
                    <div className="mappedCharacters">
                        {mappedN5KanjiCharacters}
                    </div>
                : null}
                {this.state.value.includes("N5Vocab") && this.state.value.length === 1 ?
                    <div className="mappedCharacters">
                        {mappedN5VocabCharacters}
                    </div>
                : null}

                {this.state.value.length >= 2 ?
                    <Modal open={this.state.handleClose} trigger={<Button onClick={this.handleModalOpen} className="giantButton"> Select Characters </Button>}>
                    <Modal.Header>Select For Review: </Modal.Header>
                    <Modal.Content>
                    <Modal.Description>
                    {this.state.value.includes("Hiragana") ?
                    <div className="mappedCharacters mappedCharactersModal">
                        {mappedHiraganaCharacters}
                    </div>
                    : null }
                    {this.state.value.includes("Katakana") ?  
                    <div className="mappedCharacters mappedCharactersModal">
                        {mappedKatakanaCharacters}
                    </div>
                    : null }
                    {this.state.value.includes("N5Kanji") ? 
                    <div className="mappedCharacters mappedCharactersModal">
                        {mappedN5KanjiCharacters}
                    </div>
                    : null }
                    {this.state.value.includes("N5Kanji") ? 
                    <div className="mappedCharacters mappedCharactersModal">
                        {mappedN5VocabCharacters}
                    </div>
                    : null }
                    <Button  onClick={this.addAllCharacters}> Add All Characters </Button> 
                    <Button onClick={this.handleModalClose}> Close </Button>
                    </Modal.Description>
                    </Modal.Content>
                    </Modal>
                : null}

                <div className="buttonHolder"> 
                    {this.state.value.length === 1 && this.state.value.indexOf("N5Vocab") === -1 ? 
                    <div className="selectAllCharactersButton"> 
                        <Button  onClick={this.addAllCharacters}> Add All Characters From Above List(s) </Button> 
                    </div>
                    : null}
                    <div> 
                        <Button onClick={this.clearCharacters}> Clear </Button>
                        <Button onClick={this.createMultipleChoice}> Start </Button>
                    </div>
                    
                </div>
                <HiraganaTestComponent value={this.state.value} checkAnswer={this.checkAnswer} mappedQuestions={mappedQuestions} mappedMultipleChoice={mappedMultipleChoice}/>
            </div>
        )
    }
}

export default connect(state => state, {addCharacterToList, addAllCharacters, removeCharacterFromList, clearCharacters, addCorrect, addIncorrect, createMultipleChoice})(HiraganaTest);