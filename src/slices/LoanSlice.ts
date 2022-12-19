import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, updateRequest } from "../utils/server";





const initialState = {
    loans: [],
    loading: false,
    error: null
}



export const getLoan = createAsyncThunk(
    'loan/getLoan',
    async () => {
        const response = await getRequest("/loan") as any
        if (response?.status === 200) {
            return response?.data
        }

    }
)




export const LoanSlice = createSlice({
    name: 'loan',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLoan.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(getLoan.fulfilled, (state, action) => {
                state.loading = false
            })
        builder.addCase(getLoan.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})

export default LoanSlice.reducer;


