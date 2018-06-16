import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"

export const addCharacterToList = (character) => {
    return dispatch => {
        dispatch({
            type: "ADD_CHARACTER_TO_LIST",
            character: character
        });
    }
}


const initialState = {
    characterTranslation: [],
    hiraganaCharacters: ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ",
    "そ","た","ち","つ","て","と","ま","み","む","め","も","な","に","ぬ","ね","の","は","ひ","ふ",
    "へ","ほ","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"],
    katakanaCharacters: ["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ",
    "チ","ツ","テ","ト","マ","ミ","ム","メ","モ","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ",
    "ヘ","ホ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヲ","ン"],
    currentStudyList: [],
}

export const reducer = (prevState = initialState, action) => {
    switch(action.type) {
        case "ADD_CHARACTER_TO_LIST":
            return {
                ...prevState,
                currentStudyList: prevState.currentStudyList + action.character
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