import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, updateRequest } from "../utils/server";





const initialState = {
  feedbacks: [],
  loading: false,
  error: null
}




export const getFeedback = createAsyncThunk(
  'feedback/getFeedback',
  async () => {
      const response = await getRequest("/feedback/admin/feedback-subject") as any
      if (response?.status === 200) {
        return response?.data
      }

  }
)



export const FeedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(getFeedback.pending, (state, action) => {
        state.loading = true
      }),
      builder.addCase(getFeedback.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
          
      })
    builder.addCase(getFeedback.rejected, (state, action) => {
      // state.error = action.error.message
    })
  }
})

export default FeedbackSlice.reducer;


