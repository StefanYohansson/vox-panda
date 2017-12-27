import { config } from 'vox/tools/config';
import axios from 'axios';

const api = axios.create({ baseURL: config.API_URL, timeout: 6000 });

export function createUser(username, password, email) {
  let params = new URLSearchParams();
  params.append('username', username)
  params.append('password', password)
  params.append('email', email)
  return api.post('/users', params);
}
