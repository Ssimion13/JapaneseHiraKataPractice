import React from "react";
import {Link} from "react-router-dom"


function HomePage(){
    return (
        <div className="homepageMainDiv"> 
            <div className="frontPageTitleDiv">
                <h1 className="frontPageTitle"> Learn Japanese! </h1>
                <p className="frontPageSubText"> This app is designed to be used in tandem with other resources to further your understanding of Japanese! </p>
                <p className="frontPageSubText"> Use the website to touch up on the basics, then put your skills to the test with the quiz page! </p>
                <p className="frontPageSubText"> This website was designed (for the time being) to prepare you <br/> for the Japanese Language Placement Test (JLPT) level 5 examination. </p>
                <p className="buttonAnnouncer"> Click The Buttons Below To Start! </p>
            </div>

            <div className="thumbnailHolder"> 
                <Link to="./BasicJapanese">
                    <div className="thumbnail">
                        <h1 className="thumbnailBigText">  初心者 </h1>
                        <p className="thumbnailSmallText"> For Beginners </p>
                    </div>
                </Link>
                <Link to="./HiraganaTest">
                    <div className="thumbnail">
                        <h1 className="thumbnailBigText"> N5 </h1>
                        <p className="thumbnailSmallText"> JLPT Level 5 Quiz</p>
                    </div>
                </Link>

            <Link to="./LanguageChart">
                <div className="thumbnail">
                    <h1 className="thumbnailBigTextLong"> ひらがな・かたかな </h1>
                    <p className="thumbnailSmallTextLong"> Hiragana/Katakana <br/> Language Charts</p>
                </div>
            </Link>

            </div>
        </div>
    )
}

export default HomePage;