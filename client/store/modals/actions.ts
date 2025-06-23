import { FETCH_STRIPE, API_STRIPE } from "@/helpers/constants/api";
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

export { fetchStripe };
