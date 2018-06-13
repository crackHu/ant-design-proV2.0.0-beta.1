import request from '../utils/request';
import { getUserInfo } from '../utils/authority';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  // return request('/api/currentUser');
  return getUserInfo();
}
