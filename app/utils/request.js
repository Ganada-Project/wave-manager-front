import axios from 'axios';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.data;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export function getRequest({ url }) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'x-access-token',
    'Client-hostname': `${window.location.hostname}`,
  };
  const idToken = localStorage.getItem('wm.idToken');
  if (idToken) {
    headers[`x-access-token`] = idToken;
  }
  const options = {
    method: 'GET',
    headers,
    url,
  };
  return axios(options)
    .then(checkStatus)
    .then(parseJSON);
}

export function postRequest({ url, payload }) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Client-hostname': `${window.location.hostname}`,
  };
  const idToken = localStorage.getItem('wm.idToken');
  if (idToken) {
    headers[`x-access-token`] = idToken;
  }

  const options = {
    method: 'POST',
    headers,
    url,
    data: { ...payload },
  };

  return axios(options)
    .then(checkStatus)
    .then(parseJSON);
}
