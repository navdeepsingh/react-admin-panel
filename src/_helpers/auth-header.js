export function authHeader() {
  // return authorization header with basic auth credentials
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.api_key) {
    return { 'Authorization': 'Basic ' + user.api_key };
  } else {
    return {};
  }
}