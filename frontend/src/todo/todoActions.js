import axios from 'axios';

const URL = 'http://localhost:3000/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createAt`)
    return {
        type: 'TODO_SEARCH',
        payload: request
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post({URL, description})
            .then(resp => dispatch({type: 'TODO_ADDED', payload: resp.data}),)
            .then(resp => dispatch(search()))
    }
}