import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, updateRequest } from "../utils/server";





const initialState = {
  stats: [],
  loading: false,
  error: null
}





export const getStatForDashboard = createAsyncThunk(
  'dashboard/getStatForDashboard',
  async () => {
      const response = await getRequest("/admin-action/installer") as any
      if (response?.status === 200) {
        return response?.data
      }

  }
)



export const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(getStatForDashboard.pending, (state, action) => {
        state.loading = true
      }),
      builder.addCase(getStatForDashboard.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
          
      })
    builder.addCase(getStatForDashboard.rejected, (state, action) => {
      // state.error = action.error.message
    })
   
   
  }
})

export default DashboardSlice.reducer;


