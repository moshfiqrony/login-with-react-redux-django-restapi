import axios from 'axios'

export function loadUsers() {
    return(dispatch) => {
        return axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                dispatch(getData(res.data));
            })
    }
}

export function getData(data) {
    console.log('i am from load user actions');
    return{
        type: 'load_users',
        payload: data
    }
    
}