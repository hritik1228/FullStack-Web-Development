const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/iceCreamSlice');
// const reduxLogger = require('redux-logger')
// const logger = reduxLogger.createLogger();
// configureStore will handle the multiple reducer
const userReducer = require('../features/user/userSlice');

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store