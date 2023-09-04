import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const storeslicer = createSlice({
  name: 'stores',
  initialState:{
    devGame:null
  },
  reducers: {
  
    setDevGame: (state, action) => {
   state.devGame= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDevGame } = storeslicer.actions

export default storeslicer.reducer 