import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, updateRequest } from "../utils/server";





const initialState = {
  appliance: [],
  loading: false,
  error: null
}





export const createAppliance = createAsyncThunk(
  'appliance/createAppliance',
  async (payload: { name: string, watts: number}, { rejectWithValue }) => {
    try {
      const response = await postRequest("/appliance/create", payload)
      if (response?.status === 200) {
        return response?.data
      }
    }
    catch (e) {
      return rejectWithValue(e?.response?.data?.message)
    }


  }
)



export const updateAppliance = createAsyncThunk(
  'appliance/updateAppliance',
  async (payload: {name: string, watts: string, id: string}, { rejectWithValue }) => {
    const data = {
        name: payload?.name,
        watts: payload?.watts
    }
    try {
      const response = await updateRequest(`/appliance/update/${payload?.id}`, payload)
      if (response?.status === 200) {
       
        return response?.data
      }

    }
    catch (e) {
      return rejectWithValue(e?.response?.data?.message)
    }

  }
)

export const getAppliance = createAsyncThunk(
  'appliance/getAppliance',
  async () => {
    try {
      const response = await getRequest("/appliance")
      if (response?.status === 200) {
        return response?.data
      }

    }
    catch (e) {
      console.log(e?.response?.data?.message)
    }

  }
)


export const deleteAppliance = createAsyncThunk(
    'appliance/deleteAppliance',
    async (payload: string, {rejectWithValue}) => {
      try {
        const response = await deleteRequest(`/appliance/delete/${payload}`)
        if (response?.status === 200) {
          return response?.data
        }
  
      }
      catch (e) {
        rejectWithValue(e?.response?.data?.message)
      }
  
    }
  )


export const ApplianceSlice = createSlice({
  name: 'appliance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(updateAppliance.pending, (state, action) => {
        state.loading = true
      }),
      builder.addCase(updateAppliance.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
          
      })
    builder.addCase(updateAppliance.rejected, (state, action) => {
      // state.error = action.error.message
    })
    builder.addCase(createAppliance.pending, (state, action) => {
      state.loading = true
    }),
      builder.addCase(createAppliance.fulfilled, (state, action) => {
      })
    builder.addCase(createAppliance.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(getAppliance.pending, (state, action) => {
      state.loading = true
    }),
      builder.addCase(getAppliance.fulfilled, (state, action) => {
        state.loading = false
      })
    builder.addCase(getAppliance.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(deleteAppliance.pending, (state, action) => {
        state.loading = true
      }),
        builder.addCase(deleteAppliance.fulfilled, (state, action) => {
          state.loading = false
        })
      builder.addCase(deleteAppliance.rejected, (state, action) => {
        state.error = action.error.message
      })
   
  }
})

// 
export default ApplianceSlice.reducer;


