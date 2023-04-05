import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  deleteRequest,
  getRequest,
  postRequest,
  updateRequest,
} from "../utils/server";

const initialState = {
  investors: [],
  loading: false,
  error: null,
};

export const createInvestorCosting = createAsyncThunk(
  "investor/createInvestorCosting",
  async (
    payload: {
      name: string;
      number: number;
      period: string;
      interest_rate: number;
      min_value: number;
      max_value: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = (await postRequest(
        `/plans/create-plan`,
        payload
      )) as any;
      if (response?.status === 200) {
        return response?.data;
      }
    } catch (e) {
      return rejectWithValue(e?.response?.data?.message);
    }
  }
);

export const deleteInvestorCosting = createAsyncThunk(
  "investor/deleteInvestorCosting",
  async (payload: string) => {
    const response = (await deleteRequest(`/plans/${payload}`)) as any;
    if (response?.status === 200) {
      return response?.data;
    }
  }
);

export const getInvestorCosting = createAsyncThunk(
  "investor/getInvestorCosting",
  async () => {
    const response = (await getRequest(`/plans`)) as any;
    if (response?.status === 200) {
      return response?.data;
    }
  }
);

export const getInvestorStat = createAsyncThunk(
  "investor/getInvestorStat",
  async () => {
    const response = (await getRequest(`/admin-action/investor/stats`)) as any;
    if (response?.status === 200) {
      return response?.data;
    }
  }
);

export const InvestorSlice = createSlice({
  name: "investor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInvestorCosting.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(getInvestorCosting.fulfilled, (state, action) => {
        state.loading = false;
      });
    builder.addCase(getInvestorCosting.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(deleteInvestorCosting.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(deleteInvestorCosting.fulfilled, (state, action) => {
        state.loading = false;
      });
    builder.addCase(deleteInvestorCosting.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(createInvestorCosting.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(createInvestorCosting.fulfilled, (state, action) => {
        state.loading = false;
      });
    builder.addCase(createInvestorCosting.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(getInvestorStat.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(getInvestorStat.fulfilled, (state, action) => {
        state.loading = false;
      });
    builder.addCase(getInvestorStat.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default InvestorSlice.reducer;
