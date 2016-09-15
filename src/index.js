import fetch from 'isomorphic-fetch';

const get = fetch('http://numbersapi.com/42?json')
  .then((response) => {
    if (response.status >= 400) { throw new Error('No Number :/'); }
    return response.json();
  })
  .then(data => data);

export default get;
