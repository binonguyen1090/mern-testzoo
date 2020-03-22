import axios from 'axios';

export const getFormGames = form_id => {
    return axios.get(`/api/games/forms/${form_id}`)
};

export const getGame = (game_id) => {
    return axios.get(`/api/games/${game_id}`)
};

export const createGame = (data) => {
    return axios.post(`/api/games`, data)
}

export const editGame = (game_id, data) => {
    return axios.patch(`/api/questions/${game_id}`, data)
}
