import { stringify } from 'qs';
import request from '../utils/request';

export async function create(app) {
  return request('/api/app', { method: 'POST', body: app });
}

export async function update(app) {
  return request('/api/app', { method: 'PUT', body: app });
}

export async function getAll(currentPage, pageSize) {
  return request(`/api/apps?currentPage=${currentPage}&pageSize=${pageSize}`, { method: 'GET' });
}

export async function get(id) {
  return request(`/api/app/${id}`, { method: 'GET' });
}

export async function del(id) {
  return request(`/api/app/${id}`, { method: 'DELETE' });
}

export async function search(params) {
  return request(`/api/_search/app?${stringify(params)}`, { method: 'GET' });
}
