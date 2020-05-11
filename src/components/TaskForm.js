import React,{Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from './../actions/modal';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import * as taskActions from './../actions/task';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {faStar} from '@fortawesome/free-regular-svg-icons';// viền bên ngoài icon
import {faEdit} from '@fortawesome/free-solid-svg-icons';// tô cả icon*/

class TaskForm extends Component{
	closeForm = () =>{
		var {hideModal} = this.props.modalActionCreators;
		hideModal();
	}
	onSave = values =>{
		var {title,description,status} = values;
		status = +status;
		var {addTask,updateTask} = this.props.taskActionCreators;
		if(this.props.taskEditing && this.props.taskEditing.id){
			updateTask(title,description,status);
		}else{
			addTask(title,description);
		}
	}
	showStatus = () =>{
		var xhtml = '';
		if(this.props.taskEditing && this.props.taskEditing.id){
			xhtml = <div>
						<Field name="status" component="select" className="form-control mb-4  mt-3">
				            <option value={0}>Ready</option>
							<option value={1}>In Progress</option>
							<option value={2}>Completed</option>
				         </Field>
					</div>
		}
		return xhtml;
	}
	render(){
		const { handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit(this.onSave)}>				
				<div className='mt-n4'>
					<Field name="title" component="input" type="text" placeholder="Name Of The Job" className='mb-1 w-100' style={{border:'none',outline:'none',borderBottom:'2px solid #ddd'}}/>&nbsp;&nbsp;<br />
					<Field name="description" component="input" type="text" placeholder="Description" className='w-100 mb-3' style={{border:'none',outline:'none',borderBottom:'2px solid #ddd'}} />
				</div>
				{this.showStatus()}
				<div className='d-flex justify-content-end'>
					<button type="submit" className="btn btn-dark text-white mr-2">Save</button>
					<button type="button" className="btn btn-dark text-white" onClick = {this.closeForm}>Cancel</button>
				</div>
			</form>
		);
	}
}

TaskForm.propTypes ={
	modalActionCreators: PropTypes.shape({
		hideModal: PropTypes.func
	})
}

const mapStateToProps = state =>{
	return{
		taskEditing: state.task.taskEditing,
		initialValues: state.task.taskEditing
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		modalActionCreators : bindActionCreators(modalActions,dispatch),
		taskActionCreators : bindActionCreators(taskActions,dispatch)
	}
}

const TASKFORM = 'taskform';

TaskForm = reduxForm({
  // a unique name for the form
  form: TASKFORM,

})(TaskForm)

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);