export default function client(
  state = { name: '', email: '', projects: 0 },
  action
) {
  switch (action.type) {
    case 'ADD_NAME':
      return { ...state, name: action.name };
    case 'ADD_EMAIL':
      return { ...state, email: action.email };
    case 'ADD_PROJECTS':
      return { ...state, projects: action.projects };
    default:
      return state;
  }
}
