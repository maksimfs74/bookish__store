import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchData = createAsyncThunk(
   'data/fetchData',
   async (params) => {
    const { category,filterItem} = params;
      const { data } = await axios.get
         (`https://638ac08681df38ab345ad996.mockapi.io/items?${category}&sortBy=${filterItem}&order=desc`);
      return data;
   }
)

const initialState = {
  items : [],
  loading: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
       console.log('The process is going ')
       state.items = [];
       state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
       console.log('Everything is ok')
       state.items = action.payload;
       state.loading = false;
    },
    [fetchData.rejected]: (state, action) => {
       console.log('Everything is fucked')
       state.items = [];
       state.loading = false;
    }
  }
})



export const { } = counterSlice.actions

export default counterSlice.reducer