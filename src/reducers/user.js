export default function user(
  state = { email: null, password: null, remember: false },
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
