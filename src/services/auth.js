export const onSignIn = async token => {
  await localStorage.setItem('AUTH_TOKEN', token);
};

export const onSignOut = async () => {
  await localStorage.removeItem('AUTH_TOKEN');
};

export const isSigned = async () => {
  const token = await localStorage.getItem('AUTH_TOKEN');

  return token !== null ? true : false;
};

export const getToken = async () => {
  return await localStorage.getItem('AUTH_TOKEN');
};
