import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {hiraganaCharacters, katakanaCharacters, N5Kanji} from "./dictionary.js"

export const addCharacterToList = (character) => {
    return dispatch => {
        dispatch({
            type: "ADD_CHARACTER_TO_LIST",
            character: character
        });
    }
}

export const removeCharacterFromList = (character) => {
    return dispatch => {
        dispatch({
            type: "REMOVE_CHARACTER_FROM_LIST",
            character: character
        })
    }
}

export const clearCharacters = (character) => {
    return dispatch => {
        dispatch({
            type: "CLEAR_CHARACTERS"
        })
    }
}
export const createMultipleChoice = (array, random) => {
    return dispatch => {
        dispatch({
            type: "CREATE_MULTIPLE_CHOICE",
            array: array,
            random: random
        })
    }
}

export const addCorrect = () => {
    return dispatch => {
        dispatch({
            type: "ADD_CORRECT",
        })
    }
}
export const addIncorrect = () => {
    return dispatch => {
        dispatch({
            type: "ADD_INCORRECT",
        })
    }
}




const initialState = {
    characterTranslation: [],
    hiraganaCharacters: hiraganaCharacters,
    katakanaCharacters: katakanaCharacters,
    n5KanjiCharacters: N5Kanji,
    currentStudyList: [],
    currentSelectedCharacters: [],
    multipleChoice: [],
    currentQuestion: null,
    numberCorrect: 0,
    numberIncorrect: 0,
}

export const reducer = (prevState = initialState, action) => {
    switch(action.type) {
        case "ADD_CHARACTER_TO_LIST":
            return {
                ...prevState,
                currentStudyList: [...prevState.currentStudyList, action.character],
                currentSelectedCharacters: [...prevState.currentSelectedCharacters, action.character.character]
            }
        case "REMOVE_CHARACTER_FROM_LIST":
            console.log(prevState.currentStudyList);
            return {
                ...prevState,
                currentStudyList: prevState.currentStudyList.filter(character => {
                    return character !== action.character
                }),
                currentSelectedCharacters: prevState.currentSelectedCharacters.filter(character => {
                    return character !== action.character.character
                })
            }
        case "CREATE_MULTIPLE_CHOICE":
            return {
                ...prevState,
                multipleChoice: action.array,
                currentQuestion: action.array[action.random]
            }
        case "ADD_CORRECT":
                return {
                    ...prevState,
                    numberCorrect: prevState.numberCorrect + 1
                }
        case "ADD_INCORRECT":
                return {
                    ...prevState,
                    numberIncorrect: prevState.numberIncorrect + 1
                }
        case "CLEAR_CHARACTERS":
            return initialState

        default:
            return prevState;
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);