export default function user(
  state = { email: '', password: '', remember: false },
  action
) {
  switch (action.type) {
    case 'ADD_EMAIL':
      return { ...state, email: action.email };
    case 'ADD_PASSWORD':
      return { ...state, password: action.password };
    case 'ADD_REMEMBER':
      return { ...state, remember: action.remember };
    default:
      return state;
  }
}
