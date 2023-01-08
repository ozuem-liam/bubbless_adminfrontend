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


export const getUserLoanDetail = createAsyncThunk(
    'loan/getUserLoanDetail',
    async (payload: string) => {
        const response = await getRequest(`/admin-action/loans/get-a-loan/${payload}`) as any
        if (response?.status === 200) {
            return response?.data
        }

    }
)



export const fileUpload = createAsyncThunk(
    'loan/fileUpload',
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await postRequest("/upload", payload) as any
            if (response?.status === 200) {
                return response?.data
            }
        }
        catch (e) {
            return rejectWithValue(e?.response?.data?.message)
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
        builder.addCase(fileUpload.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(fileUpload.fulfilled, (state, action) => {
                state.loading = false
            })
        builder.addCase(fileUpload.rejected, (state, action) => {
            state.error = action.error.message
        })
        builder.addCase(getUserLoanDetail.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(getUserLoanDetail.fulfilled, (state, action) => {
                state.loading = false
            })
        builder.addCase(getUserLoanDetail.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})

export default LoanSlice.reducer;


