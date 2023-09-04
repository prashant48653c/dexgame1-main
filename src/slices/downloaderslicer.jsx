import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const downloaderslicer = createSlice({
  name: 'downloaders',
  initialState:{
    screenshot:null,
    details:null,
    gameSeries:null,
    downloadLinks:null,
    publisherData:null,
   
    
  },
  reducers: {
  
    setScreenshot: (state, action) => {
      state.screenshot= action.payload
    },
    setDetails:(state,action)=>{
  state.details= action.payload
    },
    setGameSeries:(state,action)=>{
      state.gameSeries= action.payload
    },
    setDownloadLinks:(state,action)=>{
state.downloadLinks=action.payload
    },
    setPublisherData:(state,action)=>{
      state.publisherData=action.payload
    }
  
    
  },
})

// Action creators are generated for each case reducer function
export const { setScreenshot , setDetails ,setGameSeries,setDownloadLinks ,setPublisherData} = downloaderslicer.actions

export default downloaderslicer.reducer 