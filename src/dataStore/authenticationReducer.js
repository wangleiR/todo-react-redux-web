export const authenticationReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
          isSucceed: action.isSucceed,
          userToken: action.userToken,
      };
    default:
      return state;
  }
};