import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import urlService from "./shortUrlService";

const initialState = {
  urls: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createUrl = createAsyncThunk(
  "createUrl",
  async (urlData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await urlService.createUrl(urlData, token);
    } catch (error) {
      const message =
        (error?.response &&
          error?.response?.data &&
          error?.response?.data?.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUrls = createAsyncThunk("getUrls", async (thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await urlService.getUrls(token);
  } catch (error) {
    const message =
      (error?.response &&
        error?.response?.data &&
        error?.response?.data?.message) ||
      error?.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const deleteUrl = createAsyncThunk("deleteUrl", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await urlService.deleteUrl(id, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUrl.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUrl.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.urls.push(action.payload);
      })
      .addCase(createUrl.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUrls.pending, (state) => (state.isLoading = true))
      .addCase(getUrls.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.urls = action.payload;
      })
      .addCase(getUrls.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteUrl.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUrl.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.urls = state.urls.filter((url) => url._id !== action.payload.id);
      })
      .addCase(deleteUrl.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = urlSlice.actions;
export default urlSlice.reducer;
