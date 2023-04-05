import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filters/filterSlice";
import jobsSlice from "./features/jobs/jobsSlice";

import filtersSlice from "./features/filters/filterSlice";
import { apiSlice } from "./features/apiSlice";
const store = configureStore({
  reducer: {
    filters: filtersSlice,
    jobs: jobsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
export default store
