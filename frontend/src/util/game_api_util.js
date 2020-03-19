import axios from 'axios';

export const getFormGames = form_id => {
    return axios.get(`/api/forms/${form_id}/games`)
};

// export const getGame = (form_id, game_id) => {
//     return axios.get(`/api/forms/${form_id}/games/${game_id}`)
// };

export const createGame = (form_id, data) => {
    return axios.post(`/api/forms/${form_id}/games`, data)
}