import axios from 'axios'
import { apiBaseURL } from '../utils/constants'
import { FETCH_COIN_DATA, FETCH_COIN_DATA_SUCCESS, FETCH_COIN_DATA_FAIL } from '../utils/actionTypes';

axios.defaults.headers.common['X-CMC_PRO_API_KEY'] = "25485627-a053-43f3-9a44-47cc82bb7375";
export default function fetchCoinData() {
  return dispatch => {
    dispatch({ type: FETCH_COIN_DATA })
    return axios.get(`${apiBaseURL}v1/cryptocurrency/listings/latest`)
      .then(res => {
        dispatch({ type: FETCH_COIN_DATA_SUCCESS, payload: res.data.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_COIN_DATA_FAIL, payload: error.data })
      })
  }
}
