const validate = values =>{
	const errors = {};
	const {name} = values;
	console.log(values);
	if(!name){
		errors.name = 'Vui lòng nhập tiêu đề';
	}else if(name.trim().length < 5){
		errors.name = 'Tiêu đề phải từ 5 ký tự';
	}
}

export default validate;