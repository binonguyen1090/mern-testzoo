import {
    RECEIVE_FORM_GAMES,
    REECEIVE_NEW_GAME
} from "../actions/game_actions";

const GamesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_FORM_GAMES:
            newState.all = action.games.data
            return newState;

        case REECEIVE_NEW_GAME:
            newState.new = action.game.data
            return newState;

        default:
            return state;
    }
  };
  
export default GamesReducer;