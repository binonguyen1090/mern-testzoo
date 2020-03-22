import { connect } from "react-redux";
import {fetchGame ,updateGame} from "../../actions/game_actions"
import GameShow from "./games_show"

const mapStateToProps = state => {
    return {
        game: state.game
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGame: gameId => dispatch(fetchGame(gameId)),
        updateGame: (gameId, game) => dispatch(updateGame(gameId, game))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);