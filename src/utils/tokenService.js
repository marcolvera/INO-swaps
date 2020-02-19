export default {
    setToken,
    getToken,
    removeToken,
    getUserFromToken,
    getManagerFromToken
  };
  
  function removeToken() {
    localStorage.removeItem('token');
  }
  
  function getUserFromToken() {
    const token = getToken();
    return token && JSON.parse(atob(token.split('.')[1])).user;
  }
  
  function getManagerFromToken() {
    const token = getToken();
    return token && JSON.parse(atob(token.split('.')[1])).manager;
  }

  function getToken() {
    let token = localStorage.getItem('token');
    if (token) {
      // Check if the token has expired, remove it if it has
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        token = null;
      }
    }
    return token;
  }
  
  function setToken(token) {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }