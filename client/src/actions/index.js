import axios from "axios";

export const GET_ALL_CARDS = "GET_ALL_CARDS";
export const GET_CARDS_BY_NAME = "GET_CARDS_BY_NAME";
export const GET_CARD_BY_ID = "GET_CARD_BY_ID";
export const ACTIVATE = "ACTIVATE";

export function getAllCards(){
    return async function(dispatch){
        try {
            let json = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
            return dispatch({
                type: GET_ALL_CARDS,
                payload: json.data
            })
        } catch (error) {
            return dispatch({
                type: 'ERROR_404'
            })
        }
    }
}

export function getCardByName(name){
    return {
        type: GET_CARDS_BY_NAME,
        payload: name
    }
}

export function getCardById(id){
    return {
        type:GET_CARD_BY_ID,
        payload: id
    }
}

export function activate(){
    return {
        type: ACTIVATE,
        payload: true
    }
}