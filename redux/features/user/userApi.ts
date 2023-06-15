import {
  createApi,
  EndpointDefinitions,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { User } from "../userReducer";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/", //process.env.URI
    prepareHeaders(headers) {
      return headers;
    },
  }),
  tagTypes: ["Users"],
  endpoints(builder) {
    return {
      getUsers: builder.query<User[], number | void>({
        query: () => "/api/users",
        providesTags: [{ type: "Users", id: "LIST" }],
      }),
      getUser: builder.query<User, string>({
        query: (id: string) => `/api/users/${id}`,
        providesTags: [{ type: "Users", id: "LIST" }],
      }),
      addUser: builder.mutation<User, User>({
        query(user) {
          return {
            url: `/api/users`,
            method: "POST",
            body: user,
          };
        },
        invalidatesTags: [{ type: "Users", id: "LIST" }],
      }),
      updateUser: builder.mutation<User, User>({
        query(user) {
          return {
            url: `/api/users/${user._id}`,
            method: "PUT",
            body: user,
          };
        },
        invalidatesTags: [{ type: "Users", id: "LIST" }],
      }),
      deleteUser: builder.mutation<User, string>({
        query(_id) {
          return {
            url: `/api/users/${_id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: [{ type: "Users", id: "LIST" }],
      }),
    };
  },
});
//RTK Query
export const {
    useGetUserQuery,
    useGetUsersQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApi;
