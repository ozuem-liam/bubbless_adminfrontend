import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, patchRequest, postRequest, updateRequest } from "../utils/server";





const initialState = {
  feedbacks: [],
  loading: false,
  error: null
}




export const getFeedback = createAsyncThunk(
  'feedback/getFeedback',
  async () => {
      const response = await getRequest("/feedback/admin/conversations") as any
      if (response?.status === 200) {
        return response?.data
      }

  }
)

export const getFeedbackSubject = createAsyncThunk(
  'feedback/getFeedbackSubject',
  async (payload: {installerId: string, customerId: string}) => {
      const response = await getRequest(`/feedback/admin/conversations/${payload?.installerId}/${payload?.customerId}`) as any
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
    builder.addCase(getFeedbackSubject.pending, (state, action) => {
      state.loading = true
    }),
    builder.addCase(getFeedbackSubject.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
        
    })
  builder.addCase(getFeedbackSubject.rejected, (state, action) => {
    // state.error = action.error.message
  })
  }
})

export default FeedbackSlice.reducer;


