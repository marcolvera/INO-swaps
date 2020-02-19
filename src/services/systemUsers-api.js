const BASE_URL = '/api/system/users';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}