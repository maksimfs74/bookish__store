import { createSlice } from '@reduxjs/toolkit';

let contentArray = localStorage.getItem('items') ?
   JSON.parse(localStorage.getItem('items')) : [];
let countValue = localStorage.getItem('count') ?
   JSON.parse(localStorage.getItem('count')) : 0;
let allItems = localStorage.getItem('count') ?
   JSON.parse(localStorage.getItem('all')) : 0;

const initialState = {
   count: countValue,
   items: contentArray,
   allItems:allItems,
}

export const CartSlice = createSlice({
   name: 'data',
   initialState,
   reducers: {
      countPrice: (state, action) => {
         const findItem = state.items.find((obj)=> obj.id === action.payload.id);
         if(findItem){
            findItem.addCount++;
         } else {
            state.items.push({ ...action.payload, addCount:1})
         }
         localStorage.setItem('items', JSON.stringify(state.items));
         state.count = state.items.reduce((sum, obj) => {
            return (obj.price * obj.addCount) + sum
         }, 0);
         localStorage.setItem('count', JSON.stringify(state.count));
         state.allItems = state.items.reduce((sum, obj) => {
            return (obj.addCount) + sum
         }, 0);
         localStorage.setItem('all', JSON.stringify(state.allItems));

   },
   removeElement: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem.addCount > 1) {
         findItem.addCount--;
      }
      localStorage.setItem('items', JSON.stringify(state.items));
      state.count = state.items.reduce((sum, obj) => {
         return (obj.price * obj.addCount) + sum
      }, 0);
      localStorage.setItem('count', JSON.stringify(state.count));
      state.allItems = state.items.reduce((sum, obj) => {
         return (obj.addCount) + sum
      }, 0);
      localStorage.setItem('all', JSON.stringify(state.allItems));
   },
   removeItems: (state) => {
      state.items = [];
      state.count = 0;
       state.allItems = 0;
      localStorage.setItem('items', JSON.stringify(state.items))
      localStorage.setItem('count', JSON.stringify(state.count))
      localStorage.setItem('all', JSON.stringify(state.allItems));

   }, removeItem: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload.id);
      localStorage.setItem('items', JSON.stringify(state.items));
      state.count = state.items.reduce((sum, obj) => {
         return (obj.price * obj.addCount) + sum
      }, 0);
      localStorage.setItem('count', JSON.stringify(state.count));
      state.allItems = state.items.reduce((sum, obj) => {
         return (obj.addCount) + sum
      }, 0);
      localStorage.setItem('all', JSON.stringify(state.allItems));
   }

}
})
export const { countPrice,removeElement,removeItems,removeItem} = CartSlice.actions
export default CartSlice.reducer