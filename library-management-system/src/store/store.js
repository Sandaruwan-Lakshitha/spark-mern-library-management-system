import {configureStore} from '@reduxjs/toolkit';

import  booksReducer from "./booksSlice";
import memberSlice from './memberSlice';

export default configureStore({
    reducer : {
        books : booksReducer,
        members : memberSlice,
    },
})