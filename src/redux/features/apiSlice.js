import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-projects-cuv7.onrender.com",
  }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (search) => {
        if (search !== "") {
          return `/jobs?q=${search}`;
        } else {
          return "/jobs";
        }
      },
      keepUnusedDataFor: 600,
    }),
    addJob: builder.mutation({
      query: (data) => ({
        url: "/jobs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),
    editJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/jobs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Jobs",
        { type: "Job", id: arg.id },
      ],
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Jobs"],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useAddJobMutation,
  useDeleteJobMutation,
  useEditJobMutation,
} = apiSlice;
