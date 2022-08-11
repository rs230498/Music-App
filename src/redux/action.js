import * as types from './atypes'
import axios from 'axios';

const getMusicRecords = (params) => (dispatch) => {
    dispatch({ type: types.GET_MUSIC_RECORD_REQUEST })
    return axios.get("https://fake-server-app11111.herokuapp.com/albums",params)
    .then(r => {
        return dispatch({ 
            type: types.GET_MUSIC_RECORD_SUCCESS,
            payload: r.data 
        })})
    .catch(e => {
        return dispatch({ type: types.GET_MUSIC_RECORD_FAILURE })
    })
}



const updateMusicRecord = (id, payload) => (dispatch) => {
    dispatch({ type: types.UPDATE_MUSIC_RECORD_REQUEST });
    return axios
    .patch(`https://fake-server-app11111.herokuapp.com/${id}`, payload)
    .then((r) => dispatch({ type: types.UPDATE_MUSIC_RECORD_SUCCESS }))
    .catch((e) => dispatch({ type: types.UPDATE_MUSIC_RECORD_FAILURE }));
    }; 
export { getMusicRecords,updateMusicRecord }