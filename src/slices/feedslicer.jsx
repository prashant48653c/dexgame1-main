import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const feedslicer = createSlice({
  name: 'feeds',
  initialState:{
    games:null,
    gameID:null,
    searchResult:null,
    searchedKey:""
  },

  reducers: {
  
    setGames: (state, action) => {
    state.games= action.payload
    },
    setGameID:(state,action)=>{
      state.gameID=action.payload
    },
    setSearchResult:(state,action)=>{
      state.searchResult=action.payload
    },
    setSearchedKey:(state,action)=>{
      state.searchedKey=action.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const { setGames,setGameID,setSearchResult,setSearchedKey } = feedslicer.actions

export default feedslicer.reducer 