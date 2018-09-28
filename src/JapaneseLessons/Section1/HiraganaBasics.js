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
                        <div>
                            <p className="sectionText">
                                Hiragana consists of 46 characters and 23 variants of certain characters. 
                                These characters represent sounds: 
                                <br/> Five represent the 5 vowels of Japanese: "a, i, u, e, o", 
                                <br/> 40 represent consonant(s) followed by a vowel, 
                                <br/> One character represents the sound 'n' <br/> <br/>
                                
                                The sounds from these characters represent the entire Japanese vocal 'palate', and so if you understand 
                                how to pronounce all the sounds in the characters, you have the means to pronounce <i> -correctly!- </i> any Japanese word you find.

                                It is important to note that these characters are all essentially a syllable in their own right; to speak effectively, it is often best to pronounce each character with the same cadence
                                as the next, even if the character is a singular 'letter' from our perspective. A good example would be the word "Katana"; Americans pronounce the word with less emphasis on the 'ka' and a longer pause
                                at the 'ta', whereas the Japanese pronounce each part with equal cadence. Do not get caught using American pronunciation for Japanese loan words! 
                                <br/>
                                Hiragana gets its name from the rounded/flatness of the characters; the round nature of Hiragana contrasts starkly with the sharper lines of Katakana.
                            </p>
                        </div>
                    </div>

                    <div className="section">
                    <h2 className="centeredTitle"> Hiragana Table </h2>
                        <Modal open={this.state.handleClose} trigger={ <img onClick={this.handleModalOpen} src={hiraganaTable} alt="hiraganatable" className="hiraganaTable"/>}>
                            <Modal.Header> Hiragana Table</Modal.Header>
                            <Modal.Content>
                            <img onClick={this.handleModalOpen} src={hiraganaTable} alt="hiraganatable" className="modalPicture" />
                            <Button onClick={()=> {this.handleModalClose();}}> Ok </Button>
                            </Modal.Content>
                        </Modal>
                    </div>
                    <div className="section">
                        <h2 className="centeredTitle"> Vowels </h2>
                        <div> 
                            <p className="sectionText">
                            As listed above, there are five vowels in Japanese: a, i, u, e,  and o; these are pronounced distinctly and 
                            every time as: 
                            </p>
                            <br/>
                            <ul> 
                                <li> "A: (Ah)", </li>
                                <li> "I: (the e in eagle)", </li>
                                <li> "U: (The first o in oops)", </li>
                                <li> "E: (Eh)", </li>
                                <li> "O: (Oh)" </li>
                            </ul>
                        <p className="sectionText" >
                            It will take a lot of practice to get the hang of using these particular vowel sounds, especially when you are reading
                            Romaji (romanized Japanese)! 
                        </p>
                        </div>
                    </div>
                    <div className="section">
                        <h2 className="centeredTitle"> Consonant + Vowel </h2>
                        <div> 
                            <p className="sectionText">
                                The majority of Hiragana are a combination of a consonant and a vowel. The Hiragana chart is organized with the consonants in the rows and the vowels in the columns, 
                                which allows us to see how the consonant and vowel are combined.
                            
                                For Example: <br/>
                                k + a = 'Ka' (か), <br/>
                                and <br/> 
                                s + u = "Su" (す). <br/>
                                This pattern remains true of all consonant-vowel characters except for three: 
                                <br/> s + i = "Shi" (し), 
                                <br/> t + u = "Tsu" (つ), 
                                <br/> and h + u = "Fu" (ふ). <br/> 

                                These three are the notable exceptions to the consonant + vowels; you will find over time that there are several sounds missing in the Japanese palate, and even more missing consonants;
                                this is not a problem for speaking pure Japanese, but loan words will often have to compensate for these additional or missing sounds.
                            </p>
                        </div>
                    </div>
                    <div className="section">
                        <h2 className="centeredTitle"> The "n" (ん) </h2>
                        <div>
                            <p className="sectionText">
                                The final Hiragana character is the character "ん", or "n". Unlike the "n" in the "n + vowel" section of Hiragana, this singular n
                                stands alone as its own sound; a good example of this in action is in the 2nd and 3rd 'n' of the company "Nintendo" (にんてんどう）, or the 2nd n in the word "Ninja".
                                If you pronounce it, it almost sounds like a "uunnn" noise rather than a solid n on its own.
                                <br/>
                                You will never see a word begin with ん, as the "N + vowel" characters fulfill this role.
                            </p>
                        </div>
                    </div>
                    <div className="section">
                    <h2 className="centeredTitle"> Voiced and Unvoiced Consonants </h2>
                    <div>    
                        <p className="sectionText">
                            If you go through the hiragana list, you may end up asking yourself "Where are all the other letters?" 
                            To compensate for the fact that there are fewer characters in hiragana, most hiragana can be easily shifted
                            to another yet-unlisted consonant by adding two apostrophes (ten-ten in Japanese)
                            to the top right corner of the character.
                            The conversions are as follows:
                        </p>
                        <ul className="sectionText">
                            <li className="sectionText"> K → G </li>
                            <li className="sectionText"> S → Z (or J*) </li>
                            <li className="sectionText"> T → D </li>
                            <li className="sectionText"> H → B (or P**) </li>
                        </ul>
                        <p className="sectionText">
                            For example, the K section of Hiragana ( Ka, Ki, Ku, Ke, Ko, か き く け こ ) can be changed
                            to the G section simply by the addition of apostrophes in the top right of each character:
                        </p>
                        <ul > 
                            <li className="sectionText"> Ka か → Ga が   </li>
                            <li className="sectionText"> Ki き → Gi ぎ  </li>
                            <li className="sectionText"> Ku く → Gu ぐ  </li>
                            <li className="sectionText"> Ke け → Ge げ  </li>
                            <li className="sectionText"> Ko こ → Go ご. </li>
                        </ul>
                        <p className="sectionText">
                            You may be wondering why certain characters and sounds map to each other-- base Hiragana covers all the <i> unvoiced </i>
                            consonants in the Japanese language, while the voiced consonants are mapped to the consonants that share the same vocal tone.
                            For example, if you say "ka", then "ga", you will notice that they use the same parts of your mouth!
                        </p>
                    </div>
                    </div>
                    <div className="section"> 
                        <h2 className="centeredTitle"> Stroke Order </h2>
                        <p className="sectionText"> 
                            If you look at the Hiragana table, you can see lines on each labelling which parts of the character to start writing first;
                            for example, for the あ (A) character, you start with the horizonal stroke, then the vertical stroke, then finish with the loop. 
                            Follow these stroke orders as well as you can! It may seem like you can free hand these characters without following the order,
                            but as a whole, following the orders will result in characters that are more consistent and easily read. 
                        </p>
                    </div>
                    <div className="prevNextButtonHolder">
                        <Link to="/Section1/Intro">
                            <Button> Previous </Button>
                        </Link>
                        <Link to="/JapaneseLessons">
                            <Button> To Top </Button>
                        </Link>
                        <Link to="/Section1/HiraganaBasics2" >
                            <Button> Next </Button>
                        </Link>
                    </div>
                </div>
            </div>   
        )     
    }
}

export default HiraganaBasics