import * as modalTypes from './../constants/modal';

var initialState = {
	isShowForm:false,
	title:'',
	component:null
};

const modal = (state = initialState,action) =>{
	switch(action.type){
		case modalTypes.SHOW_MODAL:
			return{
				...state,
				isShowForm:true
			};
		case modalTypes.HIDE_MODAL:
			return{
				...state,
				isShowForm:false
			};
		case modalTypes.CHANGE_MODAL_TITLE:
			return{
				...state,
				title: action.payload.title
			};
		case modalTypes.CHANGE_MODAL_CONTENT:
			return{
				...state,
				component: action.payload.component
			};
		default: return state;
	}
}

export default modal;