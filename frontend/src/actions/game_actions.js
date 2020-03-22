import {
  getFormGames,
  getGame,
  createGame,
  editGame
} from "../util/game_api_util";
export const RECEIVE_FORM_GAMES = "RECEIVE_FORM_GAMES";
export const REECEIVE_GAME = "REECEIVE_GAME";
export const REECEIVE_NEW_GAME = "REECEIVE_NEW_GAME";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
const receiveFormGames = games => ({
  type: RECEIVE_FORM_GAMES,
  games
});
const receiveGame = game => ({
  type: REECEIVE_GAME,
  game
});
const receiveNewGame = game => ({
  type: REECEIVE_NEW_GAME,
  game
});
export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors
});
export const fetchGames = formId => dispatch =>
  getFormGames(formId).then(
    games => dispatch(receiveFormGames(games)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
export const fetchGame = gameId => dispatch =>
  getGame(gameId).then(
    game => dispatch(receiveGame(game)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
export const startGame = game => dispatch =>
  createGame(game).then(
    game => dispatch(receiveNewGame(game)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
export const updateGame = (gameId, game) => dispatch =>
  editGame(gameId, game).then(
    game => dispatch(receiveGame(game)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
