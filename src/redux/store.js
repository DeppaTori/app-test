import {configureStore} from '@reduxjs/toolkit';
import postingReducer from './postingSlice';

export default configureStore({
    reducer: {
        posting: postingReducer,
    },
})