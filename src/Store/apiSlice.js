import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "https://money0.onrender.com";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURI,
  }),
  endpoints: (builder) => ({
    // get categories
    getCategories: builder.query({
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),

    // get Labels
    getLabels: builder.query({
      // DELETE :https://money0.onrender.com/api/labels
      query: () => "/api/labels",
      providesTags: ["transactions"],
    }),

    //add Transaction
    addTransactions: builder.mutation({
      // POST :https://money0.onrender.com/api/transactions
      query: (initialTransactions) => ({
        url: "/api/transactions",
        method: "POST",
        body: initialTransactions,
      }),
      invalidatesTags: ["transactions"],
    }),

    //register user
    registerUser: builder.mutation({
      // POST :https://money0.onrender.com/api/register
      query: (initialregister) => ({
        url: "/api/register",
        method: "POST",
        body: initialregister,
      }),
      invalidatesTags: ["Register"],
    }),

    //delete Transaction
    deleteTransactions: builder.mutation({
      // DELETE :https://money0.onrender.com/api/transactions
      query: (recordId) => ({
        url: "/api/transactions",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transactions"],
    }),
  }),
});

export default apiSlice;
