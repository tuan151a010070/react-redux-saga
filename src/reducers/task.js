import * as TaskTypes from './../constants/task';
import * as Types from './../constants/index';
import * as toast from './../helpers/toastHelper';
var initialState ={
	listTask:[],
	taskEditing:null
};

const task = (state = initialState,action) =>{
	switch(action.type){
		case TaskTypes.FETCH_TASK:
			return{
				...state,
				listTask:[]
			}
		case TaskTypes.FETCH_TASK_SUCCESS:
			const { data } = action.payload;
			return{
				...state,
				listTask:data
			};
		case TaskTypes.FETCH_TASK_FAILED:
			var {error} = action.payload;
			toast.toastError(error);
			return{
				...state,
				listTask:[]
			}
		case Types.FILTER_SEARCH:
			var result = action.payload.data;
			return{
				...state,
				listTask: result
			};
		case TaskTypes.ADD_TASK:
			return{
				...state
			};
		case TaskTypes.ADD_TASK_SUCCESS:
			let addData = action.payload.data;
			toast.toastSuccess('Add Job Success');
			return{
				...state,
				listTask: [addData].concat(state.listTask),

			};
		case TaskTypes.ADD_TASK_FAILED:
			toast.toastError(action.payload.error);
			return{
				...state
			};
		case TaskTypes.EDITING_TASK:
			var {task} = action.payload;
			return{
				...state,
				taskEditing: task
			}
		case TaskTypes.UPDATE_TASK:
			return{
				...state
			}
		case TaskTypes.UPDATE_TASK_SUCCESS:
			const taskUpdate = action.payload.task;
			const {listTask} = state;
			var index = listTask.findIndex(item => item.id === taskUpdate.id);
			if(index !== -1){
				toast.toastSuccess('Update Job Success');
				var newList = [
					...listTask.slice(0,index),
					taskUpdate,
					...listTask.slice(index+1)
				]
			}
			return{
				...state,
				listTask: newList
			}
		case TaskTypes.UPDATE_TASK_FAILED:
			const errorUpdate = action.payload.error;
			toast.toastError(errorUpdate);
			return{
				...state
			}
		case TaskTypes.DELETE_TASK:
			return{
				...state
			}
		case TaskTypes.DELETE_TASK_SUCCESS:
			const {id} = action.payload;
			toast.toastSuccess('Delete Job Success');
			return{
				...state,
				listTask: state.listTask.filter(task => task.id !== id)
			}
		case TaskTypes.DELETE_TASK_FAILED:
			const deleteError = action.payload.error;
			toast.toastError(deleteError);
			return{
				...state
			}
		default:return state;
	}
}

export default task;