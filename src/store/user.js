import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi=createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes:"userApi",
    endpoints:(builder)=>({
        postUser:builder.mutation({
            query:(data)=>({
              method:"POST",
              url:"user",
              body:JSON.stringify(data)
            }),
            invalidatesTags:["userApi"]
        }),
        getData:builder.query({
            query:()=>({
                url:"user"
            }),
            providesTags:["userApi"]
        }),
        deleteUser:builder.mutation({
            query:(id)=>({
               url:`user/${id}`,
               method:"DELETE"
            }),
            invalidatesTags:["userApi"]
        })
    })
})


export const {usePostUserMutation,useGetDataQuery,useDeleteUserMutation}=userApi