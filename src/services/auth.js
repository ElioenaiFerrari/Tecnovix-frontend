export const onSignIn = async (token, remember) => {
  if (remember) {
    await localStorage.setItem('AUTH_TOKEN', token);
  } else {
    await sessionStorage.setItem('AUTH_TOKEN', token);
  }
};

export const onSignOut = async () => {
  await localStorage.removeItem('AUTH_TOKEN');
};

export const isSigned = () => {
  const token =
    localStorage.getItem('AUTH_TOKEN') || sessionStorage.getItem('AUTH_TOKEN');

  return token !== null ? true : false;
};

export const getToken = () => {
  const token = localStorage.getItem('AUTH_TOKEN');
  return `Bearer ${token}`;
};
