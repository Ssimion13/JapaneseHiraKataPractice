import React from "react";


function CharactersList(props) {
    var hiraganaCharacterMap = props.characters.map(character => {
        return (
            <div key={character.character + "Hiragana"} className="languageChartCharacter"> 
                {character.character} <br/>
                {character.reading}
            </div>
        )
    })

    return (
        <div className="languageChartHolder">
            {hiraganaCharacterMap}
        </div>
    )
}

export default CharactersList;