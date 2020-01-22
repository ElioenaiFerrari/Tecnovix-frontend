export default function user(state = { email: '', password: '' }, action) {
  switch (action.type) {
    case 'ADD_EMAIL':
      return { ...state, email: action.email };
    case 'ADD_PASSWORD':
      return { ...state, password: action.password };
    default:
      return state;
  }
}
