import tokenService from'./tokenService';
const BASE_URL = '/api/managers/';

export default {
  signup,
  getManager,
  logout,
  login
};

function login(creds) {
  return fetch(BASE_URL + 'managerLogin', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  }).then(({token}) => tokenService.setToken(token))
}

function logout() {
  tokenService.removeToken();
}

function getManager() {
  return tokenService.getManagerFromToken();
}

function signup(manager) {
  return fetch(BASE_URL + 'ManagerSignup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(manager)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Email already taken!');
  })
  .then(({token}) => tokenService.setToken(token));
}
  