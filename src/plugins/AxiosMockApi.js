import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://66b760587f7b1c6d8f1bb778.mockapi.io/api/v1/',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const instancia2 = axios.create()

