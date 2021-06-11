import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import data from '../../data.json';

  const initialState = {
    page: 1,
    users: [],    
  }

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (page = 1) => {
  try{    
    const response = await fetch(`https://dummyapi.io/data/api/user?page=${page}&limit=10`, 
    {headers:{'app-id': '60abc187d0fb25be32256ba1'}});
    console.log(response);
    return (await response.json());  
  }catch(e){
    console.log('error:');
      console.log(e);      
  }  
  return data;
})

export const setSelectedUser = (user) => {
    return user;
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {          
        if(action.payload.length > 10){
          return {            
            page: 1,
            users: action.payload            
          }; 
        }else{
          return {
            ...state,
            page: state.page + 1,
            users: [...state.users, ...action.payload]            
          };
        }                                       
    },    
  }
})

export default usersSlice.reducer