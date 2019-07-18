import {stringify} from 'qs';
import request from '../utils/request';
import Config from '../common/config';


export async function getInTheaters(params) {
  console.log(params);
  
  return request(`${Config.API_HOST}/address/lists?${stringify(params)}`);
}
export async function detail(id,params) {
  return request(`${Config.API_HOST}/address/delete?${stringify(params)}`);
}
export async function updateItem(id,params) {
  return request(`${Config.API_HOST}/address/update?${stringify(params)}`);
}
export async function addItem(id,params) {
  return request(`${Config.API_HOST}/address/add?${stringify(params)}`);
}

