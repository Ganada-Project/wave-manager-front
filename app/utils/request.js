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
export default function request({ url, idToken, method }) {
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Client-hostname': `${window.location.hostname}`,
  };
  if (idToken) {
    header[`x-access-token`] = idToken;
  }
  const options = {
    method,
    header,
    url,
  };

  return axios(options)
    .then(checkStatus)
    .then(parseJSON);
}
