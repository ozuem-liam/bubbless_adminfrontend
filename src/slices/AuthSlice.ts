import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";
import type { RootState } from "../app/store";
import { postRequest } from "../utils/server";
import { LoginFormData, LoginState, SignupType } from "../utils/types/type";





const initialState: LoginState = {
  userData: [],
  userInfo: null,
  loading: false,
  error: null
}





export const forgetPassword = createAsyncThunk(
  'auth/forgetPassword',
  async (payload: { email: string, redirect_url: string }, { rejectWithValue }) => {
    try {
      const response = await postRequest("/auth/request_password_reset", payload)
      if (response?.status === 200) {
        return response?.data
      }
    }
    catch (e) {
      return rejectWithValue(e?.response?.data?.message)
    }


  }
)



export const signInUser = createAsyncThunk(
  'auth/signin',
  async (payload: LoginFormData, { rejectWithValue }) => {
    try {
      const response = await postRequest("/auth/login", payload)
      if (response?.status === 200) {
       
        return response?.data
      }

    }
    catch (e) {
      return rejectWithValue(e?.response?.data?.message)
    }

  }
)


export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(signInUser.pending, (state, action) => {
        state.loading = true
      }),
      builder.addCase(signInUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false,
          state.userInfo = action.payload?.data
      })
    builder.addCase(signInUser.rejected, (state, action) => {
      // state.error = action.error.message
    })
    builder.addCase(forgetPassword.pending, (state, action) => {
      state.loading = true
    }),
      builder.addCase(forgetPassword.fulfilled, (state, action) => {
      })
    builder.addCase(forgetPassword.rejected, (state, action) => {
      state.error = action.error.message
    })
   
  }
})

export const loginState = (state: RootState) => state.auth.userData;

export const userState = (state: RootState) => state.auth.userInfo;

export default AuthSlice.reducer;


