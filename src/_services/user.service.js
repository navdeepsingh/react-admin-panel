import config from '../config';

export const userService = {
  logout,
  getQrcodes
};


function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('authenticate');
}

function getQrcodes() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.api_key);

  return fetch(config.API_BASE_URL + '/api/qrcode', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': user.api_key
    },
  })
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.error('Error: ', err));
}
