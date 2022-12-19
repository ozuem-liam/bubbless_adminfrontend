import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, updateRequest } from "../utils/server";





const initialState = {
  siting: [],
  loading: false,
  error: null
}





export const createSiting = createAsyncThunk(
  'siting/createSiting',
  async (payload: {equipment_type: string, name: string, brand: string, price: number, secification_file: string, description: string}, { rejectWithValue }) => {
    try {
      const response = await postRequest("/siting/create", payload)
      if (response?.status === 200) {
        return response?.data
      }
    }
    catch (e) {
      return rejectWithValue(e?.response?.data?.message)
    }


  }
)




export const updateSiting = createAsyncThunk(
  'siting/updateSiting',
  async (payload: {equipment_type: string, name: string, brand: string, price: number, secification_file: string, description: string, id: string}, { rejectWithValue }) => {
    try {
      const data = {
        equipment_type: payload.equipment_type, 
        name: payload.name, 
        brand: payload.brand, 
        price: payload.price, 
        secification_file: payload.secification_file, 
        description: payload.description
      }
      const response = await updateRequest(`/siting/update/${payload?.id}`, data)
      if (response?.status === 200) {
        return response?.data
      }

    }
    catch (e) {
      return rejectWithValue(e?.response?.data?.message)
    }

  }
)

export const getSiting = createAsyncThunk(
  'Siting/getSiting',
  async () => {
      const response = await getRequest("/siting") as any
      if (response?.status === 200) {
        return response?.data
      }

  }
)


export const deleteSiting = createAsyncThunk(
    'siting/deleteSiting',
    async (payload: string, {rejectWithValue}) => {
      try {
        const response = await deleteRequest(`/siting/delete/${payload}`)
        if (response?.status === 200) {
          return response?.data
        }
  
      }
      catch (e) {
        rejectWithValue(e?.response?.data?.message)
      }
  
    }
  )


export const SitingSlice = createSlice({
  name: 'siting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(updateSiting.pending, (state, action) => {
        state.loading = true
      }),
      builder.addCase(updateSiting.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
          
      })
    builder.addCase(updateSiting.rejected, (state, action) => {
      // state.error = action.error.message
    })
    builder.addCase(createSiting.pending, (state, action) => {
      state.loading = true
    }),
      builder.addCase(createSiting.fulfilled, (state, action) => {
      })
    builder.addCase(createSiting.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(getSiting.pending, (state, action) => {
      state.loading = true
    }),
      builder.addCase(getSiting.fulfilled, (state, action) => {
        state.loading = false
      })
    builder.addCase(getSiting.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(deleteSiting.pending, (state, action) => {
        state.loading = true
      }),
        builder.addCase(deleteSiting.fulfilled, (state, action) => {
          state.loading = false
        })
      builder.addCase(deleteSiting.rejected, (state, action) => {
        state.error = action.error.message
      })
   
  }
})

export default SitingSlice.reducer;


