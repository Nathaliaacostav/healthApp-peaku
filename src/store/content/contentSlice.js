import { createSlice } from '@reduxjs/toolkit'

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    content: [],
    error: null
  },
  reducers: {
    setContent: ( state, action ) => {
      state.content = action.payload
    },
    addContent: (state, action) => {
      state.content.push(action.payload);
    },
    setError: ( state, action ) => {
      state.error = action.payload
    }
  }
})

export const { setContent, addContent, setError } = contentSlice.actions

export default contentSlice.reducer