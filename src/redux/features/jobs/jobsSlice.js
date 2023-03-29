import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../../../utils/axios";

const getJobs = async (search) => {
  let queryString = "";
  if (search !== "") {
    queryString = `&q=${search}`;
  }
  const response = await axiosInstance.get(`/jobs?${queryString}`);
  return response.data;
};

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  selectedJob: {},
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobToEdit: (state, action) => {
      state.selectedJob = action.payload;
    },
  },
});
export const { setJobToEdit } = jobsSlice.actions;
export default jobsSlice.reducer;
