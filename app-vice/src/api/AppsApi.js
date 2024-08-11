import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appsApi = createApi({
    reducerPath: 'appsApi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'http://localhost:5000/' ,
      headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('token')}`,
      'Content-Type' : 'application/json'
    }}),
    tagTypes:['App'],
    endpoints: (builder) => ({
      getAllApps: builder.query({
        query: () => 'apps/',
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'App', id })), 'App']
            : ['App'],
      }),
      getAppById: builder.query({
        query:({appname})=>`apps/${appname}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'App', id })), 'App']
            : ['App'],
      }),
      getAppsByCategory: builder.query({
        query:({category})=>`apps/${category}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'App', id })), 'App']
            : ['App'],
      }),
      createApp: builder.mutation({
        query: (data)=>({
            url: 'apps/',
            method: 'POST',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'App', id: arg.id }],
      }),
      updateApp: builder.mutation({
        query: (data)=>({
            url: `apps/${data.id}`,
            method: 'PATCH',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'App', id: arg.id }],
      }), 
      deleteApp: builder.mutation({
        query: ({id})=>({
            url:`apps/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'App', id: arg.id }],
      })
    }),
});

export const {
    useGetAllAppsQuery,
    useGetAppByIdQuery,
    useCreateAppMutation,
    useUpdateAppMutation,
    useDeleteAppMutation
} = appsApi;