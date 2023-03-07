import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/iceCreamSlice';
// const reduxLogger = require('redux-logger')
// const logger = reduxLogger.createLogger();
// configureStore will handle the multiple reducer
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store