import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastError = error =>{
	let message = null;
	if(typeof error === 'object' && error.message){
		({message}= error);
	}
	if(message !== null && message !== 'undefined' && message !== ''){
		toast.error(message);
	}
}

export const toastSuccess = comment =>{
	let message = null;
		message = comment;
	if(message !== null && message !== 'undefined' && message !== ''){
		toast.success(message);
	}
}