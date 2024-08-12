import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://ec2-3-83-153-171.compute-1.amazonaws.com/" }),
    endpoints: (builder) => ({
        getStatus: builder.query({
            query: () => '/',
        }),
        postPrediction: builder.mutation({
            query: (data) =>({
                url: '/predict',
                method: 'POST',
                body: data,
            })
        })
    }),
    });
