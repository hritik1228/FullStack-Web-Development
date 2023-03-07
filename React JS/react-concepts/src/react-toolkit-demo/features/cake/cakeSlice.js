import { createSlice } from '@reduxjs/toolkit';
// Group together action and reducer logic of single fetaure in single file

// TODO -Suffix "Slice" is a file name convention in redux toolkit

const initialState = {
    numOfCakes: 10
}

// *We don't have to explicitely return a new state
// ?We can directly mutate the state(uses immer library)
// !createSlice will generate the actions creators automatically with the same name as the reducer function ex- ordered & restocked- It also returns the main reducer function we can provide it to the store
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions