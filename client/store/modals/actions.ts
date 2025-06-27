import {
  FETCH_STRIPE,
  API_STRIPE,
  FETCH_SUBSCRIPTION,
  API_SUBSCRIPTION,
} from "@/helpers/constants/api";
import { AppAsyncThunkConfig } from "@/helpers/types";
import { handleAxiosError } from "@/helpers/validating-funcs/error";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchStripe = createAsyncThunk(FETCH_STRIPE, async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(API_STRIPE);
    const url = response.data.url;
    window.location.href = url;
    return url;
  } catch (err) {
    rejectWithValue(handleAxiosError(err));
  }
});

const fetchSubscription = createAsyncThunk<boolean, void, AppAsyncThunkConfig>(
  FETCH_SUBSCRIPTION,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_SUBSCRIPTION);
      return response.data;
    } catch (error) {
      rejectWithValue(handleAxiosError(error));
    }
  },
);

export { fetchStripe, fetchSubscription };
