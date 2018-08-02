import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {N5Kanji, N5Vocab} from "./dictionary.js"

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

export const addAllCharacters = (studyArray, selectedArray) => {
    return dispatch => {
        dispatch({
            type:"ADD_ALL_CHARACTERS",
            studyArray: studyArray,
            selectedArray: selectedArray
        })
    }
}

export const getDataFromServer = (data, datatype) => {
    return dispatch => {
        dispatch({
            type:"GET_DATA_FROM_SERVER",
            data: data,
            datatype: datatype
        })
    }
}



const initialState = {
    characterTranslation: [],
    hiraganaCharacters: [],
    katakanaCharacters: [],
    n5KanjiCharacters: [],
    n5Vocab: [],
    currentStudyList: [],
    currentSelectedCharacters: [],
    multipleChoice: [],
    currentQuestion: null,
    numberCorrect: 0,
    numberIncorrect: 0,
}

export const reducer = (prevState = initialState, action) => {
    switch(action.type) {
        case "GET_DATA_FROM_SERVER":
            return {
                ...prevState,
                [action.datatype] : action.data,
            }


        case "ADD_CHARACTER_TO_LIST":
            if(action.character.word){
                action.character.character = action.character.word;
            }
            return {
                ...prevState,
                currentStudyList: [...prevState.currentStudyList, action.character],
                currentSelectedCharacters: [...prevState.currentSelectedCharacters, action.character.character]
            }
        case "ADD_ALL_CHARACTERS":
            return {
                ...prevState,
                currentStudyList: [...action.studyArray],
                currentSelectedCharacters: [...action.selectedArray]
            }
        case "REMOVE_CHARACTER_FROM_LIST":
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
                currentQuestion: action.random
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
            return {
                ...prevState,
                characterTranslation: [],
                n5KanjiCharacters: N5Kanji,
                n5Vocab: N5Vocab,
                currentStudyList: [],
                currentSelectedCharacters: [],
                multipleChoice: [],
                currentQuestion: null,
                numberCorrect: 0,
                numberIncorrect: 0,
            }

        default:
            return prevState;
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);