export const onSignIn = async token => {
  await localStorage.setItem('AUTH_TOKEN', token);
};

export const onSignOut = async () => {
  await localStorage.removeItem('AUTH_TOKEN');
  await localStorage.removeItem('remember');
};

export const isSigned = () => {
  const token = localStorage.getItem('AUTH_TOKEN');

  return token !== null ? true : false;
};

export const getToken = () => {
  const token = localStorage.getItem('AUTH_TOKEN');
  return `Bearer ${token}`;
};

/**
 * Remember password functions
 */
export const setRemember = async (remember = false) => {
  if (remember) {
    await localStorage.setItem('remember', true);
  } else {
    await localStorage.setItem('remember', false);
  }
};

export const getRemember = () => {
  const remember = localStorage.getItem('remember');
  if (remember !== null) return remember == 'true' ? true : false;
  return true;
};

export const expireToken = async (time = 1800000) => {
  setTimeout(() => {
    alert('Seu token expirou!');
    onSignOut();
    window.location.href = '/login';
  }, time);
};
