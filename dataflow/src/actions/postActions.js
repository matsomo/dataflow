import { FETCH_DATA, NEW_DATA } from './types';
const BaseUri = 'https://reqres.in/';

export function fetchData(){
  return function (dispatch) {
    fetch(BaseUri + 'api/users')
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_DATA,
      payload: data.data
    }));
  }
}
