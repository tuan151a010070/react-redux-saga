import * as Types from './../constants/index';


export const changeKeyword = (keyword) =>{
	return{
		type: Types.CHANGE_KEYWORD,
		payload:{
			keyword
		}
	}
}

export const filterSearch = (data) =>{
	return{
		type: Types.FILTER_SEARCH,
		payload:{
			data
		}
	}
}