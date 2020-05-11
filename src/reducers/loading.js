import * as Types from './../constants/index';
var initialState = {
	isShowLoading:false
}

const loading = (state = initialState,action) =>{
	switch(action.type){
		case Types.SHOW_LOADING:
			return{
				...state,
				isShowLoading:true
			}
		case Types.HIDE_LOADING:
			return{
				...state,
				isShowLoading:false
			}
		default: return state;
	}
}

export default loading;