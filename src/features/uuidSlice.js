import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


const uuidSlice = createSlice ({
    name:"uuid",
    initialState: uuidv4(),
    reducer:{
      getSession: state => {
            state = uuidv4() ;
        },
    }
})

export const uuidSession = state => state.uuid.value;

export const {getSession} = uuidSlice.actions;

export default uuidSlice.reducer;