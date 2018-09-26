export const authenticationReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_FULFILLED':
      return {
          isSucceed: true,
          userToken: action.payload.token,
      };
    default:
      return state;
  }
};