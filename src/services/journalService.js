// local constant for holding the URL to our api
const BASE_URL = 'http://localhost:3005/api';

// Named export of function for making AJAX requests

export function fetchJournalData() {
    return fetch(BASE_URL + '/journals').then(res => res.json());
}