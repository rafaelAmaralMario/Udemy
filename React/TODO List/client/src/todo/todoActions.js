import axios from 'axios'
import todoReducer from './todoReducer';
const URL = 'http://localhost:3003/api/todos'

export const  handleChange = (e) => ({ 
        type: 'HANDLE_CHANGE', 
        data: e.target.value
})


export const search = () => {

    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : '';
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then( resp => dispatch( {type: 'HANDLE_SEARCH', payload: resp.data}) )
    }

}

export const add = ( description= '') => {
    return dispatch => {
        axios.post(URL, {description})
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
    }
}

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => dispatch(search()))
    }
}

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`,  {...todo, done : true })
        .then(resp => dispatch(search()))
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`,  {...todo, done : false })
        .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [ { type : 'HANDLE_CLEAR' }, search() ]
}
