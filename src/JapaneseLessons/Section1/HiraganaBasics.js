import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button, Modal} from 'semantic-ui-react'
import hiraganaTable from "./hiraganatable.png"

class HiraganaBasics extends Component {
    constructor(){
        super();
        this.state = {
            handleClose: false
        }
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }
    handleModalOpen = () => this.setState({handleClose: true})

    handleModalClose = () => {
            this.setState({handleClose: false})
    }

    render(){
        return(
            <div className="informativePageDiv">
                <div className="textSection">
                    <div className="section">
                        <h2 className="centeredTitle"> Hiragana Basics </h2>
                        <div className="sectionSplitter">
                            <div className="paragraph" > <br/> Hiragana consists of 5 'vowel' characters: 'a, i, u, e, o' , 40 consonant(s) + vowel characters,
                                and one solo consonant character (n), seen in the picture.
                                <br/> 
                                If you look at the figure,
                                you'll see that the below each of the vowel characters lies characters that represent a consonant plus
                                the vowel above it: <br/> k + a = 'Ka' (か), <br/> s + u = "Su" (す). <br/>
                                This is true of all consonant-vowel characters
                                except for three: <br/> s + i = "Shi" (し), <br/> t + u = "Tsu" (つ), <br/> and h + u = "Fu" (ふ). <br/> 
                            </div>
                            <Modal open={this.state.handleClose} trigger={ <img onClick={this.handleModalOpen} src={hiraganaTable} alt="hiraganatable" className="hiraganaTable"/>}>
                                <Modal.Header> Hiragana Table</Modal.Header>
                                <Modal.Content>
                                <img onClick={this.handleModalOpen} src={hiraganaTable} alt="hiraganatable" className="modalPicture" />
                                <Button onClick={()=> {this.handleModalClose();}}> Ok </Button>
                                </Modal.Content>
                            </Modal>
                        </div>
                    </div>
                    <div className="section">
                        <h2 className="centeredTitle"> Vowel Pronunciation </h2>
                        <div className="paragraph"> As listed above, there are five vowels in Japanese: a, i, u, e,  and o; these are pronounced distinctly and 
                            every time as: <br/>
                            <ul> 
                                <li> "A: (Ah)", </li>
                                <li> "I: (the e in eagle)", </li>
                                <li> "U: (The first o in oops)", </li>
                                <li> "E: (Eh)", </li>
                                <li> "O: (Oh)" </li>
                            </ul>
                        
                        It will take a lot of practice to get the hang of using these particular vowel noises, especially when you are reading
                        Romaji (romanized Japanese)! Try your best to practice and memorize these sounds, and you will be able to correctly pronounce anything
                        in Japanese the first time. The pronunciation always matches what is written, unlike English, and there are no long or short vowels to confuse you.
                        </div>
                    </div>
                    <div className="section">
                    <h2 className="centeredTitle"> Voiced and Unvoiced Consonants </h2>
                    <div className="paragraph">    If you go through the hiragana list, you may end up asking yourself "Where are all the other letters?" 
                        To compensate for the fact that there are fewer characters in hiragana, most hiragana can be easily shifted
                        to another yet-unlisted consonant by adding two apostrophes (ten-ten in Japanese)
                        to the top right corner of the character.
                        The conversions are as follows:
                    </div>
                    <ul>
                        <li> K → G </li>
                        <li> S → Z (or J*) </li>
                        <li> T → D </li>
                        <li> H → B (or P**) </li>
                    </ul>
                    <div className="paragraph">
                        For example, the K section of Hiragana ( Ka, Ki, Ku, Ke, Ko, か き く け こ ) can be changed
                        to the G section simply by the addition of apostrophes in the top right of each character:
                        <ul>
                            <li> Ka か → Ga が   </li>
                            <li> Ki き → Gi ぎ  </li>
                            <li> Ku く → Gu ぐ  </li>
                            <li> Ke け → Ge げ  </li>
                            <li> Ko こ → Go ご. </li>
                        </ul>

                        You may be wondering why certain characters and sounds map to each other-- base Hiragana covers all the <i> unvoiced </i>
                        consonants in the Japanese language, while the voiced consonants are mapped to the consonants that share the same vocal tone.
                        For example, if you say "ka", then "ga", you will notice that they use the same parts of your mouth!
                    </div>
                    </div>
                    <div className="section"> 
                        <h2 className="centeredTitle"> Stroke Order </h2>
                        <p> If you look at the Hiragana table, you can see lines on each labelling which parts of the character to start writing first;
                            for example, for the あ (A) character, you start with the horizonal stroke, then the vertical stroke, then finish with the loop. 
                            Follow these stroke orders as well as you can! It may seem like you can free hand these characters without following the order,
                            but as a whole, following the orders will result in characters that are more consistent and easily read. </p>
                    </div>
                    <div className="prevNextButtonHolder">
                        <Link to="/Section1/Intro">
                            <Button> Previous </Button>
                        </Link>
                        <Link to="/JapaneseLessons">
                            <Button> To Top </Button>
                        </Link>
                        <Link to="/Section1/BasicSentenceStructure" >
                            <Button> Next </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default HiraganaBasics