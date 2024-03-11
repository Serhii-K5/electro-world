// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   isLoading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginStart(state) {
//       state.isLoading = true;
//       state.error = null;
//     },
//     loginSuccess(state, action) {
//       state.isLoading = false;
//       state.user = action.payload;
//     },
//     loginFailure(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

// export default authSlice.reducer;

// export const login = (credentials) => async (dispatch) => {
//   try {
//     dispatch(loginStart());
//     // Здесь должен быть ваш API-запрос для авторизации
//     
//     const user = await api.login(credentials);
//     dispatch(loginSuccess(user));
//   } catch (error) {
//     dispatch(loginFailure(error.message));
//   }
// };