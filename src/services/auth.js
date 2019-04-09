import axios from 'axios';

export async function postLogin(username, password) {
  const url = process.env.REACT_APP_API_SERVER + '/api/login';
  const headers = {
    Culture: process.env.REACT_APP_API_CULTURE,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
  const stringparams = {
    'api-version': process.env.REACT_APP_API_VERSION,
    brand: process.env.REACT_APP_API_BRAND,
    Platform: 'Desktop'
  };

  let querystring = Object.entries(stringparams)
    .map(e => e.join('='))
    .join('&');

  const posturl = url + '?' + querystring;
  const params = {
    hostname: window.location.hostname,
    grantType: 'password',
    clientId: process.env.REACT_APP_API_CLIENTID,
    clientSecret: process.env.REACT_APP_API_CLIENTSECRET,
    username: username,
    password: password,
    scope: process.env.REACT_APP_API_SCOPE,
    appId: process.env.REACT_APP_API_APPID,
    siteId: process.env.REACT_APP_API_WEB_SITEID
  };

  return axios
    .post(posturl, params, { headers })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

export async function postLogout() {
  const url = process.env.REACT_APP_API_SERVER + '/api/Logout';
  const headers = {
    Culture: process.env.REACT_APP_API_CULTURE,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
  const params = {
    clientId: process.env.REACT_APP_API_CLIENTID,
    clientSecret: process.env.REACT_APP_API_CLIENTSECRET,
    refreshToken: localStorage.getItem('app.token.refresh'),
    accessToken: localStorage.getItem('app.token'),
    memberCode: localStorage.getItem('app.membercode')
  };

  const stringparams = {
    'api-version': process.env.REACT_APP_API_VERSION,
    brand: process.env.REACT_APP_API_BRAND,
    Platform: 'Desktop'
  };

  let querystring = Object.entries(stringparams)
    .map(e => e.join('='))
    .join('&');

  const posturl = url + '?' + querystring;

  return axios
    .post(posturl, params, { headers })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}
