import axios from 'axios';

export async function getBalance(token, wallet) {
  const url = process.env.REACT_APP_API_SERVER + '/api/Balance';
  var configs = {
    params: {
      wallet: wallet,
      'api-version': process.env.REACT_APP_API_VERSION,
      brand: process.env.REACT_APP_API_BRAND,
      Platform: 'Desktop'
    },
    headers: {
      Authorization: `Bearer ${token}`,
      Culture: process.env.REACT_APP_API_CULTURE
    }
  };

  return axios
    .get(url, configs)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}
