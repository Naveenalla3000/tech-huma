import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import authSlice from "./services/auth/authSlice";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// call the load user function on every page load
const instializeApp = async () => {
  // await store.dispatch(apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true }));
  await store.dispatch(
    api.endpoints.refreshToken.initiate({}, { forceRefetch: true })
  );
  // await store.dispatch(apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true }));
  await store.dispatch(
    api.endpoints.loadUser.initiate({}, { forceRefetch: true })
  );
};

instializeApp();