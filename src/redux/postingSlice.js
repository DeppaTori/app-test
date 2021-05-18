import { createSlice } from '@reduxjs/toolkit';

export const postingSlide = createSlice({
    name: 'posting',
    initialState: {
        items: [
            {
                id:1,
                title:'Hari Senja',
                content: 'Content Hari Senja',
                posting:1
            },
            {
                id:2,
                title:'Hari Sore',
                content: 'Content Hari Sore',
                posting:1
            },
            {
                id:3,
                title:'Hari Siang',
                content: 'Content Hari Siang',
                posting:0
            }
        ]
    },
    reducers : {
        add: (state, action)=>{
          
          state.items = [...state.items,action.payload];
        },
        update: (state, action)=>{
            var foundIndex = state.items.findIndex(x => x.id == action.payload.id);
            state.items[foundIndex] = {...state.items[foundIndex],posting:action.payload.posting};
        },
    }

});

export const {add, update } = postingSlide.actions
export default postingSlide.reducer;