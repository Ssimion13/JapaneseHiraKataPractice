import React from "react";
import {Link} from "react-router-dom"


function HomePage(){
    return (
        <div className="homepageMainDiv"> 
            <div className="frontPageTitleDiv">
                <h1 className="frontPageTitle"> You Can Learn Japanese! </h1>
                <p className="frontPageSubText"> People tell you constantly that Japanese is too hard, that there is no way you can learn it, but with this website, it can make studying easy! </p>
                <p className="frontPageSubText"> Use the grammar section to learn basic Japanese grammar structure and the lessons provided to learn the concepts, then put your skills to the test with the quiz page! </p>
                <p className="frontPageSubText"> This website was designed (for the time being) to prepare you for the Japanese Language Placement Test (JLPT) level 5 examination. </p>
                <p className="buttonAnnouncer"> Click The Buttons Below To Start! </p>
            </div>

            <div className="thumbnailHolder"> 
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