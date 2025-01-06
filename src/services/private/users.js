import { privateAPi } from '.';

export const usersApi = privateAPi.injectEndpoints({
  endpoints: build => ({
    getUser: build.query({
      query: params => ({
        url: '/user-profile/user-profile/',
        method: 'GET',
        params,
      }),
      providesTags: ['GetUser'],
    }),
    getUserLogsHistory: build.query({
      query: params => ({
        url: '/user/log-history/',
        method: 'GET',
        params,
      }),
      providesTags: ['GetUser'],
    }),
    getUserById: build.query({
      query: slug => `/services/company/${slug}/`,
      providesTags: ['GetUserById'],
    }),

    addUser: build.mutation({
      query: body => ({
        url: '/user-profile/user-profile/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['GetUser'],
    }),

    addContact: build.mutation({
      query: body => ({
        url: '/user/contact-us/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetUserQuery, useAddUserMutation, useGetUserByIdQuery, useAddContactMutation, useGetUserLogsHistoryQuery } = usersApi;
