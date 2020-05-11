import * as Types from './../constants/index';

export const showLoading = () =>{
	return{
		type : Types.SHOW_LOADING
	}
}

export const hideLoading = () =>{
	return{
		type: Types.HIDE_LOADING
	}
}