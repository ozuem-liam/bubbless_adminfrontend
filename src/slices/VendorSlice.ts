import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, updateRequest } from "../utils/server";





const initialState = {
  installers: [],
  loading: false,
  error: null
}



export const createInstaller = createAsyncThunk(
  'installer/createInstaller',
  async (payload: {first_name: string,password: string, last_name: string, email: string, phone: string, business_name: string, address: string, user_type: string, status: string}, { rejectWithValue }) => {
    try {
      const response = await postRequest("/admin-action/installer/register", payload)
      if (response?.status === 200) {
        return response?.data
      }
    }
    catch (e) {
      return rejectWithValue(e?.response?.data?.message)
    }


  }
)


export const getInstaller = createAsyncThunk(
  'installer/getInstaller',
  async () => {
      const response = await getRequest("/admin-action/installer") as any
      if (response?.status === 200) {
        return response?.data
      }

  }
)

export const createInstallerCosting = createAsyncThunk(
  'installer/createInstallerCosting',
  async (payload: {name: string,value: number,cost_type: string}) => {
      const response = await postRequest(`/installer-cost/create-installation-cost`, payload) as any
      if (response?.status === 200) {
          return response?.data
      }

  }
)

export const deleteInstallerCosting = createAsyncThunk(
  'installer/deleteInstallerCosting',
  async (payload: string) => {
      const response = await deleteRequest(`/installer-cost//${payload}`) as any
      if (response?.status === 200) {
          return response?.data
      }

  }
)

export const getInstallerCosting = createAsyncThunk(
  'installer/getInstallerCosting',
  async () => {
      const response = await getRequest(`/installer-cost`) as any
      if (response?.status === 200) {
          return response?.data
      }

  }
)

export const InstallerSlice = createSlice({
  name: 'installer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(createInstaller.pending, (state, action) => {
        state.loading = true
      }),
      builder.addCase(createInstaller.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
          
      })
    builder.addCase(createInstaller.rejected, (state, action) => {
      // state.error = action.error.message
    })
    builder.addCase(getInstaller.pending, (state, action) => {
      state.loading = true
    }),
      builder.addCase(getInstaller.fulfilled, (state, action) => {
      })
    builder.addCase(getInstaller.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(getInstallerCosting.pending, (state, action) => {
      state.loading = true
  }),
      builder.addCase(getInstallerCosting.fulfilled, (state, action) => {
          state.loading = false
      })
  builder.addCase(getInstallerCosting.rejected, (state, action) => {
      state.error = action.error.message
  })
  builder.addCase(deleteInstallerCosting.pending, (state, action) => {
      state.loading = true
  }),
      builder.addCase(deleteInstallerCosting.fulfilled, (state, action) => {
          state.loading = false
      })
  builder.addCase(deleteInstallerCosting.rejected, (state, action) => {
      state.error = action.error.message
  })
  builder.addCase(createInstallerCosting.pending, (state, action) => {
      state.loading = true
  }),
      builder.addCase(createInstallerCosting.fulfilled, (state, action) => {
          state.loading = false
      })
  builder.addCase(createInstallerCosting.rejected, (state, action) => {
      state.error = action.error.message
  })
  }
})

export default InstallerSlice.reducer;


