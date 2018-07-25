import React, {Component} from "react";

class HiraganaBasics extends Component {


    render(){
        return(
            <div>
                <h2> Hiragana Basics </h2>
                <p> Hiragana consists of 5 'vowel' characters: 'a, i, u, e, o' , 40 consonant(s) + vowel characters,
                    and 1 solo consonant character (n), seen in the above picture. If you look at the above figure,
                    you'll see that the below each of the vowel characters lies characters that represent a consonant plus
                    the vowel above it, eg. k + a = 'Ka' (か), s + u = "Su" (す). This is true of all consonant-vowel characters
                    except for three: s + i = "Shi" (し), t + u = "Tsu" （つ）, and h + u = "Fu" (ふ). 
                </p>
                <h2> Vowel Pronunciation </h2>
                    <p> As listed above, there are five vowels in Japanese: a, i, u, e,  and o; these are pronounced distinctly and 
                        every time as 
                        "A: Ah", 
                        "I: e (how we pronounce e on its own)", 
                        "u: Oooh, like a surprise, or the first O in oops",
                        "e: Eh",
                        "o: Oh"
                    
                    It will take a lot of practice to get the hang of using these particular vowel noises, especially when you are reading
                    Romaji (romanized Japanese)! Try your best to practice and memorize these sounds, and you will be able to correctly pronounce anything
                    in Japanese the first time. The pronunciation always matches what is written, unlike English!
                    </p>

                <h2> Voiced and Unvoiced Consonants </h2>
                <p>    If you go through the hiragana list, you may end up asking yourself "Where are all the other letters?" 
                    To compensate for the fact that there are fewer characters in hiragana, most hiragana can be easily shifted
                    to another yet-unlisted consonant by adding two apostrophes (ten-ten in Japanese)
                    to the top right corner of the character.
                    The conversions are as follows:
                </p>
                <ul>
                    <li> K -> G </li>
                    <li> S -> Z (or J*) </li>
                    <li> T -> D </li>
                    <li> H -> B (or P**) </li>
                </ul>
                <p>
                    For example, the K section of Hiragana (Ka　か, ki　き, ku　く, ke　け, ko　こ) can be changed
                    to the G section simply by the addition of apostrophes in the top right of each character:
                    Ka か -> Ga　が
                    Ki　き　-> Gi ぎ
                    Ku　く　-> Gu ぐ
                    Ke  け -> Ge　げ
                    Ko　こ　-> Go ご.

                    You may be wondering why certain characters and sounds map to each other-- base Hiragana covers all the <i> unvoiced </i>
                    consonants in the Japanese language, while the voiced consonants are mapped to the consonants that share the same vocal tone.
                    For example, if you say "ka", then "ga", you will notice that they use the same parts of your mouth!
                </p>
            


                
            </div>
        )
    }

}

export default HiraganaBasics