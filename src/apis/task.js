import axiosService from './../commons/axiosService';
import {API_ENDPOINT} from './../constants';
import qs from 'query-string'; // truyen vao 1 oject chuyen key = ?key=value&key=value

const url = 'tasks';

export const getList = (params ={}) =>{
	let queryParams = '';
	if(Object.keys(params).length >0){
		queryParams = `?${qs.stringify(params)}`;
	}
	return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
}

export const addTask = (data) =>{
	return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}

export const updateTasks = (data,id) =>{
	return axiosService.put(`${API_ENDPOINT}/${url}/${id}`,data);
}

export const deleteTasks = id =>{
	return axiosService.delete(`${API_ENDPOINT}/${url}/${id}`);
}