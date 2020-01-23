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
    case 'ADD_ENTERPRISE':
      return { ...state, enterprise: action.enterprise };
    case 'ADD_CONCLUSED':
      return { ...state, conclused: action.conclused };
    case 'ADD_WORK':
      return { ...state, work: action.work };
    default:
      return state;
  }
}
