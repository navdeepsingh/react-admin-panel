import config from '../config';

export const userService = {
  logout,
  getQrcodes,
  qrcodeAdd,
  qrcodeUpdate
};


function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('authenticate');
}

function getQrcodes() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    console.log(user.api_key);

    return fetch(config.API_BASE_URL + '/api/qrcode', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.api_key
      },
    })
      .then(response => response.json())
      .then(res => res)
      .catch(err => console.error('Error: ', err));
  }
}

function qrcodeUpdate(data, qrcode) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return fetch(config.API_BASE_URL + '/api/qrcode/' + qrcode.id, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.api_key
      },
    })
      .then(response => response.json())
      .then(res => res)
      .catch(err => console.error('Error: ', err));
  }
}

function qrcodeAdd(data) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return fetch(config.API_BASE_URL + '/api/qrcode', {
      crossDomain: true,
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.api_key
      },
    })
      .then(response => response.json())
      .then(res => res)
      .catch(err => console.error('Error: ', err));
  }
}
