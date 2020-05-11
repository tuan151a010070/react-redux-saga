import {fork, take,call,put,delay,takeLatest,takeEvery,select} from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import * as Types from './../constants/index';
import {STATUSES} from './../constants/index';
import {getList,addTask,updateTasks,deleteTasks} from './../apis/task';
import {STATUSCODE} from './../constants';
import {fetchListTaskSuccess,fetchListTaskFailed,addTaskSuccess,addTaskFailed,fetchListTask,updateTaskSuccess,updateTaskFailed,deleteTaskSuccess,deleteTaskFailed} from './../actions/task';
import {showLoading,hideLoading} from './../actions/ui';
import {hideModal} from './../actions/modal';

function* watchFetchListTaskAction(){
	while(true){
		const action = yield take(taskTypes.FETCH_TASK); // khi action có type  FETCH_TASK được gọi
		const {params} = action.payload;
		yield put(showLoading());
		const resp = yield call(getList,params); // tiếp đến chúng ta sẽ gọi API bằng fuction getList
		const { status,data} = resp;	 // nhận lại 1 cái resp chứa dữ liệu trả về từ api
		if( status === STATUSCODE.SUCCESS){ // nếu resp.status bằng 200 là lấy thành công sẽ thực thi code bên dưới
			yield put(fetchListTaskSuccess(data));	// put gọi cái hàm fetchListTaskSuccess truyền vào resp.data 
		}else{										// thực thi action FETCH_TASK_SUCCESS
			yield put(fetchListTaskFailed(data));
		}
		yield delay(1000);
		yield put(hideLoading());
	}
}

function* watchSearchTaskAction({payload}){
	yield delay(500);
	const {keyword} = payload;
	yield put(fetchListTask({
		search:keyword.trim()
	}));
}

function* watchAddTaskAction({payload}){
	var {title,description} = payload;
	yield put(showLoading());
	var resp = yield call(addTask,{
		title,
		description,
		status:STATUSES[0].value
	});
	var {status,data} = resp;
	if(status === STATUSCODE.CREATE){
		yield put(addTaskSuccess(data));
		yield put(hideModal());
	}else{
		yield put(addTaskFailed(data));
	}
	yield put(hideLoading());
}

function* watchUpdateTaskAction({payload}){
	const {title,description,status} = payload;
	const taskEditing = yield select(state => state.task.taskEditing);
	yield put(showLoading());
	const resp = yield call(updateTasks,{title,description,status},taskEditing.id);
	let {data} = resp;
	if(resp.status === STATUSCODE.SUCCESS){
		yield put(updateTaskSuccess(data));
		yield put(hideModal());
	}else{
		yield put (updateTaskFailed(data));
	}
	yield delay(500);
	yield put(hideLoading());
}

function* watchDeleteTaskAction({payload}){
	const {id} = payload;
	yield put(showLoading());
	const resp = yield call(deleteTasks,id);
	if(resp.status === STATUSCODE.SUCCESS){
		yield put(deleteTaskSuccess(id));
		yield put(hideModal());
	}else{
		yield put(deleteTaskFailed(resp.data));
	}
	yield delay(500);
	yield put(hideLoading());
}

function* rootSaga(){
	yield fork(watchFetchListTaskAction);
	yield takeLatest(Types.CHANGE_KEYWORD,watchSearchTaskAction);
	yield takeEvery(taskTypes.ADD_TASK,watchAddTaskAction);
	yield takeLatest(taskTypes.UPDATE_TASK,watchUpdateTaskAction);
	yield takeLatest(taskTypes.DELETE_TASK,watchDeleteTaskAction);
}

export default rootSaga;