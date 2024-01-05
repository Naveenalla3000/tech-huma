import { api } from "../api";
import { userLoggedIn, userLoggedOut } from "./authSlice";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //login mutation logic
    login: builder.mutation({
      query: ({ email, password, recaptchValue }) => ({
        url: "/user/login",
        method: "POST",
        body: {
          email,
          password,
        },
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("Login user details with jwt access_token");
          console.log(result.data);
          dispatch(
            userLoggedIn({
              access_token: result.data.access_token,
              user: result.data.user,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    logout: builder.query({
      query: () => ({
        url: "/user/logout",
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          dispatch(userLoggedOut());
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // sendReset password (message)
    sendResetPassword: builder.mutation({
      query: ({ email }) => ({
        url: "/user/forgot_password",
        method: "POST",
        body: {
          email,
        },
        credentials: "include",
      }),
    }),

    // post otp
    sendOtp: builder.mutation({
      query:({otp})=>({
        url:'/user/confirm_otp',
        method:"POST",
        body:{
          otp,
        },
        credentials:"include"
      }),
    }),

    resetPassword: builder.mutation({
      query:({newPassword,confirmNewPassword})=>({
        url:'/user/reset_password',
        method:"POST",
        body:{
          newPassword,
          confirmNewPassword
        },
        credentials: "include"
      }),
    }),

  }),
});

export const { useLoginMutation, useLogoutQuery,useSendResetPasswordMutation,useSendOtpMutation, useResetPasswordMutation } = authApi;
