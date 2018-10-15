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
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    handleModalOpen = () => this.setState({handleClose: true})

    handleModalClose = () => {
            this.setState({handleClose: false})
    }

    render(){
        return(
            <div className="informativePageDiv">
                <div className="textSection">
                    <div className="example">
                        <h1 className="centeredTitle"> Intro to Written Japanese </h1>
                    </div>
                    <div className="section">
                        <p className="sectionText"> 
                            Written Japanese has two 'alphabets', Hiragana and Katakana. The characters used in Hiragana and Katakana represent either a vowel, consonant(s) + vowel,
                            or the letter "n". There are also Kanji (lit. Chinese Characters) that are used to represent various sounds, but more importantly to express concepts and meanings.  
                            Finally, there is Romanized Japanese, or Romaji. Romaji can be used to write anything in Japanese, although it is not commonly used by Japanese relative to the other three.
                        </p>
                        <p className="sectionText">
                            These parts of Japanese all work together within the framework of the language to convey thoughts and ideas, just like English. It is very common to see a sentence
                            that contains some or all of these together. For example:

                        </p>
                        <br/>
                        <div className="example">
                            <h2> "  私 は タイラー です。" </h2>
                            <h2> Watashi wa TAIRAA desu. </h2>
                            <h2> (I am Tyler) </h2>
                        </div>
                        <p className="sectionText"> 
                            It <i> is </i> necessary to learn these alphabets and Kanji to be a proficient Japanese writer, but learning Japanese is not as daunting of a task as you would think.
                            Japanese has several advantages over other languages that allow it to be an easy language to pick up as long as you are willing to give it a try and step out of the comfort zone.
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
                            If you are starting to learn Japanese, learning Hiragana is an absolute must to make any progress in learning the written language.
                            Hiragana (ひらがな) is fundamental building block of written Japanese. Everything there is in Written Japanese can be written in Hiragana,  
                            and as such, it is the most important of all the character sets for learning Japanese. 
                            <br/>
                            There are 46 hiragana (and 23 small variants of these) in total; this may sound like a large number, but given English has 52 letters you must learn due to
                            upper and lower case letters and the fact that these letters have <i> thousands </i> of ways they can be pronounced based on the word and letters around them,
                            Hiragana is a much easier 'alphabet' to ease into; once you know a character, you know it will be pronounced the same way every time!
                            Once you can read these characters, you will have all you need to write Basic Japanese!  
                        </p>

                        <p className="sectionText"> The following section will cover Hiragana in greater detail. </p>
                            <Modal open={this.state.handleClose} trigger={ <Button onClick={this.handleModalOpen} alt="AuthorsNotes" className=""> Author's Notes </Button>}>
                                <Modal.Header> Author's Notes </Modal.Header>
                                <Modal.Content>
                                    <p className="modelText"> 
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
                            Katakana (カタカナ)　is another 46 (+ 23 variants) character 'alphabet'  in Japanese-- functionally, it is the same as Hiragana; the same pronunciations for the same sounds.
                            in modern use, it is used almost exclusively for loan words (of varying origins, but often English!), for advertisements (eg. billboards), company names,
                            and at times for emphasis. Its function is very similar to that of capital letters, and so often you will see Katakana romanized as capital letters.
                            It would be wrong to say that Katakana is as essential as Hiragana or Kanji, but in the modern world, its use has become more and more commonplace, and so learning it
                            is still very important.
                        </p>
                    </div>
                    <div className="section">
                        <h2 className="centeredTitle"> Kanji </h2>
                        <p className="sectionText"> 
                             Kanji (漢字) (lit. "Chinese characters") are characters taken from the Chinese language that are used in written Japanese.
                            Unlike Hiragana and Katakana which purely represent sounds, Kanji themselves represent concepts -- from fire (火), feelings (嬉), places (店), etc.
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
                    <div className="prevNextButtonHolder">
                        <Link to="/JapaneseLessons" className="nextButton">
                            <Button> To Top </Button>
                        </Link>
                        <Link to="/Section1/HiraganaBasics" className="nextButton">
                            <Button> Next </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Intro