import config from '../config';

export const userService = {
  logout,
  getQrcodes,
  qrcodeAdd,
  qrcodeUpdate,
  qrcodeImage,
  qrcodeDelete,
  getUser,
  updateProfile,
  sendPasswordResetEmail
};


function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('authenticate');
}

function getUser() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return fetch(config.API_BASE_URL + '/api/user', {
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

function updateProfile(id, data) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return fetch(config.API_BASE_URL + '/api/user/' + id, {
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

function qrcodeImage(item) {
  let sourceLink = '';
  if (item) {
    sourceLink = item.source_link;
  } else {
    // Generate Random code and QR Code
    sourceLink = config.API_BASE_URL + '/redirect/' + Math.random().toString(36).substring(2, 6)
  }
  return fetch('https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + sourceLink)
    .then(response => response.blob())
    .then(image => URL.createObjectURL(image))
    .then(result => {
      return {
        image: result,
        sourceLink: sourceLink
      }
    })
    .catch(err => console.error('Error: Creating QR Code ' + err))
}

function getQrcodes() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
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

function qrcodeDelete(qrcode) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return fetch(config.API_BASE_URL + '/api/qrcode/' + qrcode.id, {
      crossDomain: true,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.api_key
      },
    })
      .then(response => response.json())
      .catch(err => console.error('Error: ', err));
  }
}

function sendPasswordResetEmail(email) {
  console.log(email);
  return fetch(config.API_BASE_URL + '/reset-password', {
    crossDomain: true,
    method: 'post',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .catch(err => console.error('Error: ', err));

}
