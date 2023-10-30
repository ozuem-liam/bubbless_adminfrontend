import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, patchRequest, postRequest, updateRequest } from "../utils/server";





const initialState = {
    orders: [],
    loading: false,
    error: null
}



export const getOrderStat = createAsyncThunk(
    'loan/getOrderStat',
    async () => {
        const response = await getRequest("/admin/order-stats") as any
        if (response?.status === 200) {
            return response?.data
        }

    }
)

export const getOrder = createAsyncThunk(
    'loan/getOrder',
    async (payload: string) => {
        const response = await getRequest(`/admin/orders?status=${payload}`) as any
        if (response?.status === 200) {
            return response?.data
        }

    }
)

export const createConfigLoan = createAsyncThunk(
    'loan/createConfigLoan',
    async (payload: {number: number,period: string,interest_rate: number,min_value: number, max_value: number}) => {
        const response = await postRequest(`/loan-period/create-loan-period`, payload) as any
        if (response?.status === 200) {
            return response?.data
        }

    }
)

export const deleteConfigLoan = createAsyncThunk(
    'loan/deleteConfigLoan',
    async (payload: string) => {
        const response = await deleteRequest(`/loan-period/${payload}`) as any
        if (response?.status === 200) {
            return response?.data
        }

    }
)

export const getConfigLoan = createAsyncThunk(
    'loan/getConfigLoan',
    async () => {
        const response = await getRequest(`/loan-period`) as any
        if (response?.status === 200) {
            return response?.data
        }

    }
)

export const updateLoanStatus = createAsyncThunk(
    'loan/updateLoanStatus',
    async (payload: {id: string, status: string}) => {
        const data = {
            status: payload?.status
        }
        const response = await patchRequest(`/admin-action/update-loan-status/${payload?.id}`, data) as any
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

export const getDueLoans = createAsyncThunk(
    'loan/getDueLoans',
    async (payload: string) => {
        const response = await getRequest(`/admin-action/loans/get-loans-info?status=${payload}`) as any
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
        builder.addCase(getOrder.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(getOrder.fulfilled, (state, action) => {
                state.loading = false
            })
        builder.addCase(getDueLoans.rejected, (state, action) => {
            state.error = action.error.message
        }),
        builder.addCase(getDueLoans.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(getDueLoans.fulfilled, (state, action) => {
                state.loading = false
            })
        builder.addCase(getOrder.rejected, (state, action) => {
            state.error = action.error.message
        }),
        builder.addCase(getOrderStat.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(getOrderStat.fulfilled, (state, action) => {
                state.loading = false
            })
        builder.addCase(getOrderStat.rejected, (state, action) => {
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
        builder.addCase(getConfigLoan.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(getConfigLoan.fulfilled, (state, action) => {
                state.loading = false
            })
        builder.addCase(getConfigLoan.rejected, (state, action) => {
            state.error = action.error.message
        })
        builder.addCase(deleteConfigLoan.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(deleteConfigLoan.fulfilled, (state, action) => {
                state.loading = false
            })
        builder.addCase(deleteConfigLoan.rejected, (state, action) => {
            state.error = action.error.message
        })
        builder.addCase(createConfigLoan.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(createConfigLoan.fulfilled, (state, action) => {
                state.loading = false
            })
        builder.addCase(createConfigLoan.rejected, (state, action) => {
            state.error = action.error.message
        })
        builder.addCase(updateLoanStatus.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(updateLoanStatus.fulfilled, (state, action) => {
                state.loading = false
            })
        builder.addCase(updateLoanStatus.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})

export default LoanSlice.reducer;


