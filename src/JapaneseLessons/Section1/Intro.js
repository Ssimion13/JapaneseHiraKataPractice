import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button, Modal} from 'semantic-ui-react'

class Intro extends Component {
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
                        <h2 className="centeredTitle"> Intro to Written Japanese </h2>
                        <p className="sectionText"> 
                            Written Japanese has two 'alphabets' (linguistically called 'syllabary'), <br/> Hiragana and Katakana. The characters used in Hiragana and Katakana represent either a vowel, consonant(s) + vowel,
                            or the letter "n". There are also Kanji (lit. Chinese Characters) that are used to represent various sounds, but more importantly to express concepts and meanings.  
                            Finally, there is Romanized Japanese, or Romaji. 
                        </p>


                        {/* <p> These three forms of writing are very commonly seen together in one sentence: for example: <br/>
                            "私  は  タイラー  です" <br/>
                            (Watashi wa TAIRAA desu) <br/>
                            (I am Tyler) <br/>
                            With the first character being kanji, the 2nd and 4th being hiragana, and the third being Katakana.
                        </p> */}
                    </div>
                    <div className="section">
                        <h2 className="centeredTitle"> Hiragana </h2>
                        <p className="sectionText">
                            Hiragana (ひらがな) fundamental building block of written Japanese. Everything there is in Written Japanese can be written in Hiragana,  
                            and as such, it is the most important of all the character sets for learning Japanese. 
                            There are 46 hiragana (and 23 small variants of these) in total, and once you can read
                            these characters, you will have all you need to write Basic Japanese!  
                        </p>
                        <p className="sectionText"> The following section will cover Hiragana in greater detail. </p>
                            <Modal open={this.state.handleClose} trigger={ <Button onClick={this.handleModalOpen} alt="AuthorsNotes" className=""> Author's Notes </Button>}>
                                <Modal.Header> Author's Notes </Modal.Header>
                                <Modal.Content>
                                    <p className="sectionText"> 
                                        It is important to note that while anything in written Japanese can be conveyed with either Romaji or with Hiragana and be perfectly understood,
                                        it is very uncommon in actual real life settings to see <i> just </i> Hiragana or <i> just </i> Romaji, and generically Japanese purely written in Hiragana is
                                        in the realm of children's text and text targetting foreigners.  
                                    </p>
                                    <br/>
                                <Button className="rightFloatButton" onClick={()=> {this.handleModalClose();}}> Ok </Button>
                                </Modal.Content>
                            </Modal>
                    </div>
                    <div className="section">
                        <h2 className="centeredTitle"> Katakana </h2>
                        <p className="sectionText"> 
                            Katakana (カタカナ)　is another 46 character 'alphabet'  in Japanese-- it is used 
                            almost exclusively for loan words (of varying origins, but often English!), for advertisements (eg. billboards),
                            and at times for emphasis. While it is not the most important syllabary to learn relative to Hiragana and Kanji,
                            nonetheless it is incredibly common, especially in the modern era where globalization causes loan words to appear
                            in greater frequency.  
                        </p>
                    </div>
                    <div className="section">
                        <h2 className="centeredTitle"> Kanji </h2>
                        <p className="sectionText"> 
                             Kanji (漢字) (lit. "Chinese characters") are characters taken from the Chinese language that are used in written Japanese.
                            Unlike Hiragana and Katakana which purely represent sounds, Kanji themselves represent concepts -- from fire (火), feelings (嬉)　, places (店), etc.
                        </p> <br/>
                        <p className="sectionText">
                            The existence of Kanji allows for complex concepts to be created in an alternative method to English's use of combination words, roots, etc.
                            Kanji also exist in writing to allow for differentiation between homophones, as Hiragana and Katakana do not have different spellings for the same characters, unlike in English.
                            It may seem intimidating to see Kanji as they are probably foreign to most English speakers, but once you understand a Kanji and its meaning, it is very similar
                            to understanding a root in English; for example, "Bi" in English means "Two", which means if you see "Bi" in another word, you'd know it has something to do with two;
                            the same applies to Japanese with the kanji 二 (Two)!
                        </p> 　
                        <p className="sectionText"> 
                            Later sections will cover Kanji in much more detail.
                        </p>
                    </div>
                </div>
                <div className="prevNextButtonHolder">
                    <Link to="/JapaneseLessons" className="nextButton">
                        <Button> To Top </Button>
                    </Link>
                    <Link to="/Section1/HiraganaBasics" className="nextButton">
                        <Button> Next </Button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default Intro