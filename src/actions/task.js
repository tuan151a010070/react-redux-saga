import * as TaskTypes from './../constants/task';
import * as Types from './../constants/index';

export const fetchListTask = (params = {}) =>{
	return{
		type : TaskTypes.FETCH_TASK,
		payload:{
			params
		}
	}
}

export const fetchListTaskSuccess = data =>{
	return{
		type : TaskTypes.FETCH_TASK_SUCCESS,
		payload:{
			data
		}
	}
}

export const fetchListTaskFailed = error =>{
	return{
		type : TaskTypes.FETCH_TASK_FAILED,
		payload:{
			error
		}
	}
}

export const changeKeyword = (keyword) =>{
	return{
		type: Types.CHANGE_KEYWORD,
		payload:{
			keyword
		}
	}
}

export const addTask = (title,description) =>{
	return{
		type: TaskTypes.ADD_TASK,
		payload:{
			title,
			description
		}
	}
}

export const addTaskSuccess = data =>{
	return{
		type: TaskTypes.ADD_TASK_SUCCESS,
		payload:{
			data
		}
	}
}

export const addTaskFailed = error =>{
	return{
		type: TaskTypes.ADD_TASK_FAILED,
		payload:{
			error
		}
	}
}

export const editingTask = task =>{
	return{
		type: TaskTypes.EDITING_TASK,
		payload:{
			task,
		}
	}
}

export const updateTask = (title,description,status) =>{
	return{
		type: TaskTypes.UPDATE_TASK,
		payload:{
			title,
			description,
			status
		}
	}
}

export const updateTaskSuccess = task =>{
	return{
		type: TaskTypes.UPDATE_TASK_SUCCESS,
		payload:{
			task,
		}
	}
}

export const updateTaskFailed = error =>{
	return{
		type: TaskTypes.UPDATE_TASK_FAILED,
		payload:{
			error,
		}
	}
}

export const deleteTask = id =>{
	return{
		type: TaskTypes.DELETE_TASK,
		payload:{
			id
		}
	}
}

export const deleteTaskSuccess = id =>{
	return{
		type: TaskTypes.DELETE_TASK_SUCCESS,
		payload:{
			id
		}
	}
}

export const deleteTaskFailed = error =>{
	return{
		type: TaskTypes.DELETE_TASK_FAILED,
		payload:{
			error
		}
	}
}