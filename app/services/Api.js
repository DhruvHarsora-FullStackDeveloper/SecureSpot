import { api } from './Utils';

export const getData = endPoint => api.get(endPoint);
export const getCRUDData = endPoint => api.get(endPoint);
export const addCRUDData = args => api.put('', args);
export const addData = (endPoint, args) => api.post(endPoint, args);
