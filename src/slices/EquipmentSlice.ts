import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, updateRequest } from "../utils/server";





const initialState = {
  equipment: [],
  loading: false,
  error: null
}





export const createEquipment = createAsyncThunk(
  'equipment/createEquipment',
  async (payload: {equipment_type: string, name: string, brand: string, price: number, secification_file: string, description: string}, { rejectWithValue }) => {
    try {
      const response = await postRequest("/equipment/create", payload)
      if (response?.status === 200) {
        return response?.data
      }
    }
    catch (e) {
      return rejectWithValue(e?.response?.data?.message)
    }


  }
)


export const createEquipmentRequest = createAsyncThunk(
    'equipment/createEquipmentRequest',
    async (payload: {equipment_type: string, name: string, brand: string, price: number, secification_file: string, description: string, status: string, supplier: string}, { rejectWithValue }) => {
      try {
        const response = await postRequest("/equipment-request/create", payload)
        if (response?.status === 200) {
          return response?.data
        }
      }
      catch (e) {
        return rejectWithValue(e?.response?.data?.message)
      }
  
  
    }
  )


export const updateEquipment = createAsyncThunk(
  'equipment/updateEquipment',
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
      const response = await updateRequest(`/equipment/update/${payload?.id}`, data)
      if (response?.status === 200) {
        return response?.data
      }

    }
    catch (e) {
      return rejectWithValue(e?.response?.data?.message)
    }

  }
)

export const getEquipment = createAsyncThunk(
  'equipment/getEquipment',
  async () => {
      const response = await getRequest("/equipment") as any
      if (response?.status === 200) {
        return response?.data
      }

  }
)


export const deleteEquipment = createAsyncThunk(
    'equipment/deleteEquipment',
    async (payload: string, {rejectWithValue}) => {
      try {
        const response = await deleteRequest(`/equipment/delete/${payload}`)
        if (response?.status === 200) {
          return response?.data
        }
  
      }
      catch (e) {
        rejectWithValue(e?.response?.data?.message)
      }
  
    }
  )


export const EquipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(updateEquipment.pending, (state, action) => {
        state.loading = true
      }),
      builder.addCase(updateEquipment.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
          
      })
    builder.addCase(updateEquipment.rejected, (state, action) => {
      // state.error = action.error.message
    })
    builder.addCase(createEquipment.pending, (state, action) => {
      state.loading = true
    }),
      builder.addCase(createEquipment.fulfilled, (state, action) => {
      })
    builder.addCase(createEquipment.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(createEquipmentRequest.pending, (state, action) => {
        state.loading = true
      }),
        builder.addCase(createEquipmentRequest.fulfilled, (state, action) => {
        })
      builder.addCase(createEquipmentRequest.rejected, (state, action) => {
        state.error = action.error.message
      })
    builder.addCase(getEquipment.pending, (state, action) => {
      state.loading = true
    }),
      builder.addCase(getEquipment.fulfilled, (state, action) => {
        state.loading = false
      })
    builder.addCase(getEquipment.rejected, (state, action) => {
      state.error = action.error.message
    })
    builder.addCase(deleteEquipment.pending, (state, action) => {
        state.loading = true
      }),
        builder.addCase(deleteEquipment.fulfilled, (state, action) => {
          state.loading = false
        })
      builder.addCase(deleteEquipment.rejected, (state, action) => {
        state.error = action.error.message
      })
   
  }
})

// 
export default EquipmentSlice.reducer;


