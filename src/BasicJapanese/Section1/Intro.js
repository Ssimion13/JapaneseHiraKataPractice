import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react'

class Intro extends Component {


    render(){
        return(
            <div className="informativePageDiv">
                <h1 className="centeredTitle"> Intro </h1>
                <div className="textSection">
                    <div className="section">
                        <h2 className="centeredTitle"> Intro to Written Japanese </h2>
                        <p> Japanese has two written 'alphabets' (linguistically called 'syllabary'), <br/> Hiragana and Katakana, as well as the Chinese characters
                            that the Japanese use known as Kanji. 
                            These four are used in tandem to form written Japanese.
                            Romanized Japanese, or Romaji are used on occasion but not commonly.  
                        </p>
                        <p> These three forms of writing are very commonly seen together in one sentence: for example: <br/>
                            "私  は  タイラー  です" <br/>
                            (Watashi wa TAIRAA desu) <br/>
                            (I am Tyler) <br/>
                            With the first character being kanji, the 2nd and 4th being hiragana, and the third being Katakana.
                        </p>
                    </div>
                    <div className="section">
                        <h4 className="centeredTitle"> Hiragana </h4>
                        <p>
                            Hiragana (ひらがな) fundamental building block of written Japanese. There are 46 hiragana (and 23 small variants of these) that all represent
                            a distinct sound in the language (a phoneme). 
                            Luckily, these 69 characters and their derivatives make up the entirety of the Japanese vocal palate, which means that once you can
                            write and speak these sounds, <i> everything </i> is pronounced as it is written in Japanese the same way every time!
                            The next section will cover Hiragana in more detail.
                        </p>
                    </div>
                    <div className="section">
                        <h4 className="centeredTitle"> Katakana </h4>
                        <p> 
                            Katakana (カタカナ)　is another 46 character 'alphabet'  in Japanese-- it is used almost exclusively for loan words (of varying origins, but often English!), for advertisements (eg. billboards),
                            and at times for emphasis. It is not <i> necessarily </i> truly essential to learn Katakana to understand Japanese, but as time goes on and the world globalizes,
                            the amount of loan words increases and so the Japanese use Katakana far more than in past years.
                        </p>
                    </div>
                    <div className="section">
                        <h4 className="centeredTitle"> Kanji </h4>
                        <p> 
                            Finally, Kanji (漢字) (lit. "Chinese characters") are characters taken from the Chinese language that are used (with Japanese pronunciation, often adopted from old Chinese pronunciation).
                            While it is certainly possible to convey anything purely in Hiragana or Katakana, Kanji exist because they are characters
                            that represent concepts-- from fire (火), feelings (嬉)　, places (店), and all the combinations that can be made between concepts,
                            Kanji allow for quick translation of concepts as an alternative to English's use of longer words and different spelling.
                            Since there are only so few sounds that Japanese uses as a whole, Kanji also exist in writing to allow for differentiation between homophones--
                            in English, we often use the spelling to differentiate, but in Japanese, there are such a degree of homophones due to relative lack of phonemes that
                            Kanji are often the easiest way to differentiate concepts with the same spelling/pronunciation.
                        </p> 　
                    </div>
                </div>
                <Link to="/HiraganaBasics" className="nextButton">
                    <Button> Next </Button>
                </Link>
                <Link to="/BasicJapanese" className="nextButton">
                    <Button> To Top </Button>
                </Link>
            </div>
        )
    }

}

export default Intro