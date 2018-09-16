export const authenticationReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.isSucceed;
    default:
      return state;
  }
};