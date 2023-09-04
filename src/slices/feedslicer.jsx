import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const feedslicer = createSlice({
  name: 'feeds',
  initialState:{
    games:null,
    gameID:null,
  },

  reducers: {
  
    setGames: (state, action) => {
    state.games= action.payload
    },
    setGameID:(state,action)=>{
      state.gameID=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setGames,setGameID } = feedslicer.actions

export default feedslicer.reducer 