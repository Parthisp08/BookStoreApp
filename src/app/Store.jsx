import {configureStore} from '@reduxjs/toolkit';
import BookReducer from '../feature/BookSlice';


export const store= configureStore ({
    reducer:{
        books:BookReducer
    }
})