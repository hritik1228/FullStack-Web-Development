const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Declare constants for action types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// Now Create Action Creator
// Action creator - A Function that returns a action
// Last two actions are dependent on first actions

// 1. Fetch user data
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

// 2. Store the list of user if request was successfull
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

// 3. Store an error message if the request fails
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// Define our reducer function

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

// Make an API Call
// redux-thunk -Define async action creator it allows to return a function instead of an acion,function can now perform side effects such as asynchronous task.
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users/', {
                headers: { "Accept-Encoding": "gzip,deflate,compress" }
            })
            .then(response => {
                // response.data is the array of user
                const users = response.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                // error.message gives the description of the error
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

// Create our redux store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())