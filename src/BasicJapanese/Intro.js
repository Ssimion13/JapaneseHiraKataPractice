import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'semantic-ui-react'

class Intro extends Component {


    render(){
        return(
            <div className="informativePageDiv">
                <h1 className="centeredTitle"> Intro </h1>
                <div className="textSection">
                    <h2 className="centeredTitle"> English vs. Japanese </h2>
                    <p> 
                        English has 26 letters in its alphabet that constitute the entire written language,
                        whereas Japanese has two written 'alphabets' (linguistically called 'syllabary'), <br/> Hiragana and Katakana, as well as Chinese characters
                        that the Japanese use known as Kanji. Romanized Japanese, or Romaji are also used on occasion. 
                        These four are used in tandem to form written Japanese.  
                    </p>
                    <h4 className="centeredTitle"> Hiragana </h4>
                    <p>
                        Hiragana (ひらがな) is at its core the fundamental building block of written Japanese. There are 46 hiragana that all represent
                        a phoneme, that is, a distinct sound in the language. You may be thinking "Well, that's almost double the English alphabet!", but
                        luckily for us, these 46 characters and their derivatives make up the entirety of the Japanese vocal palate, which means that once you can
                        write and speak these sounds, <i> everything </i> is pronounced as it is written in Japanese the same way every time!
                        No worrying about how to spell something or pronounce words like 'silhouette'!
                    </p>
                    <h4 className="centeredTitle"> Katakana </h4>
                    <p> 
                        Katakana (カタカナ)　is another 46 character 'alphabet'  in Japanese-- it is used almost exclusively for loan words (of varying origins, but often English!), for advertisements (eg. billboards),
                        and at times for emphasis. It is not <i> necessarily </i> truly essential to learn Katakana to understand Japanese, but as time goes on and the world globalizes,
                        the amount of loan words increases and so the Japanese use Katakana far more than in past years.
                    </p>
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
                <Link to="/HiraganaBasics" className="nextButton">
                    <Button> Next </Button>
                </Link>
            </div>
        )
    }

}

export default Intro