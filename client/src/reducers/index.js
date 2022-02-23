import { GET_ALL_CARDS, GET_CARDS_BY_NAME, GET_CARD_BY_ID } from "../actions";
import * as ctrl from "../controllers";
const initalState = {
    allCards: [],
    cards: []
};

//norma(); //comes from controllers

export default function rootReducer(state = initalState, action){
    switch (action.type) {

        case GET_ALL_CARDS:
            return {
                ...state,
                allCards: action.payload,
            };
        
        case GET_CARDS_BY_NAME:
            const myCards = state.allCards.data;
            return {
                ...state,
                cards: myCards.filter(card => card.name.normalizing().includes(action.payload.toLowerCase()))
            }

        case GET_CARD_BY_ID:
            const myCard = state.cards;
            return {
                ...state,
                cards: myCard.filter(c => c.id == action.payload)
            }
        default:
            return state;
    }
}