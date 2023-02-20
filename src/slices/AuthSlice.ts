import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";
import type { RootState } from "../app/store";
import { getRequest, postRequest } from "../utils/server";
import { LoginFormData, LoginState, SignupType } from "../utils/types/type";





const initialState: LoginState = {
  userData: [],
  userInfo: null,
  loading: false,
  error: null
}





export const forgetPassword = createAsyncThunk(
  'auth/forgetPassword',
  async (payload: { email: string}, { rejectWithValue }) => {
    try {
      const response = await postRequest("/auth/initiate-password-reset", payload)
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
  'admin/login',
  async (payload: LoginFormData, { rejectWithValue }) => {
    try {
      const response = await postRequest("/admin/login", payload)
      if (response?.status === 200) {
       
        return response?.data
      }

    }
    catch (e) {
      return rejectWithValue(e?.response?.data?.message)
    }

  }
)


export const registerUser = createAsyncThunk(
  'admin/registerUser',
  async (payload: SignupType, { rejectWithValue }) => {
    const data = {
      first_name: payload?.firstName,
      last_name: payload?.lastName,
      email: payload?.email,
      phone: payload?.mobile,
      password: payload?.password,
      user_type: "admin"
    }
    try {
      const response = await postRequest("/admin/register", data)
      if (response?.status === 200) {    
        return response?.data
      }
    }
    catch (e) {
      return rejectWithValue(e?.response?.data?.message)
    }

  }
)

export const getProfile = createAsyncThunk(
  'auth/getProfile',
  async () => {
    try {
      const response: any = await getRequest("/admin/profile")
      if (response?.status === 200) {
        return response?.data
      }

    }
    catch (e) {
      console.log(e?.response?.data?.message)
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
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true
    }),
    builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
    })
  builder.addCase(registerUser.rejected, (state, action) => {
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
    builder.addCase(getProfile.pending, (state, action) => {
      state.loading = true
    }),
      builder.addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false
       state.userData = action?.payload?.data
      })
    builder.addCase(getProfile.rejected, (state, action) => {
      state.error = action.error.message
    })
   
  }
})

export const loginState = (state: RootState) => state.auth.userInfo;

export const userState = (state: RootState) => state.auth.userData;

export default AuthSlice.reducer;


