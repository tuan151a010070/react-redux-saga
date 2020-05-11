import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import $ from 'jquery';
import Popper from 'popper.js';*/
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-regular-svg-icons';// viền bên ngoài icon
import {faStar as start} from '@fortawesome/free-solid-svg-icons';// tô cả icon*/
import PropTypes from 'prop-types';
import {STATUSES} from './constants/index';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import Search from './components/Search';
import TaskForm from './components/TaskForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from './actions/task';
import * as modalActions from './actions/modal';


// <div className=''></div>

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			isShowForm:false
		}
	}
	componentDidMount(){
		var {fetchListTask} = this.props.taskActionCreators;
		fetchListTask();
	}
	openForm = () =>{
		var {editingTask} = this.props.taskActionCreators;
		editingTask(null);
		var {showModal,changeModalTitle,changeModalContent} = this.props.modalActionCreators;
		showModal();
		changeModalTitle('Add New Job');
		changeModalContent(<TaskForm />);
	}
	handleSearch = (e) =>{
		var value = e.target.value;
		var {changeKeyword} = this.props.taskActionCreators;
		changeKeyword(value);
	}
	onEditing = task =>{
		var {editingTask} = this.props.taskActionCreators;
		editingTask(task);
		var {showModal,changeModalTitle,changeModalContent} = this.props.modalActionCreators;
		showModal();
		changeModalTitle('Update The Job');
		changeModalContent(<TaskForm />);
	}
	onShowForm = task =>{
		var {showModal,changeModalTitle,changeModalContent,hideModal} = this.props.modalActionCreators;
		showModal();
		changeModalTitle('Delete Job');
		changeModalContent(
			<div>
			<div className='mt-n4 mb-4'>
				You Sure Delete Job : <span className='font-weight-bold'>{task.title}</span> ??? 	
			</div>
			<div className='d-flex justify-content-end'>
				<button type="submit" className="btn btn-dark text-white mr-2" onClick={() => this.onDeleteTask(task.id)}>Accept</button>
				<button type="button" className="btn btn-dark text-white" onClick = {hideModal}>Cancel</button>
			</div>
			</div>
		);
	}
	onDeleteTask = id =>{
		const {deleteTask} = this.props.taskActionCreators;
		deleteTask(id);
	}
	render(){
		var listTask = this.props.listTask;
		var {isShowForm} = this.props;
		const formAdd = <Modal />;
		return (
	 		<div className=''>
	 			<div className='btn btn-primary mt-2 ml-2 font-weight-bold' onClick={this.openForm}><b>+ </b>ADD NEW JOB</div>
	 			<Search handleSearch={this.handleSearch}/>
	 			<div className='row mt-3 mx-2'>
	 			{
	 				STATUSES.map((status,index)=>{
	 					var taskFilter = listTask.filter(task=> task.status === status.value);
	 					return 	<TaskList task={taskFilter} status={status} key={index} onEditing={this.onEditing} onShowForm={this.onShowForm}/>
	 				})
	 			}				
	 			</div>
	 			{isShowForm === true ? formAdd : ''}
	 		</div>
 		);
	}
}

App.propTypes={
	taskActionCreators: PropTypes.shape({
		fetchListTask: PropTypes.func,
	}),
	listTask: PropTypes.array,
	modalActionCreators: PropTypes.shape({
		showModal: PropTypes.func,
		changeModalTitle: PropTypes.func,
		changeModalContent: PropTypes.func
	}),
	isShowForm: PropTypes.bool
};

const mapStateToProps = state =>{
	return{
		listTask: state.task.listTask,
		isShowForm: state.modal.isShowForm
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		taskActionCreators : bindActionCreators(taskActions,dispatch),
		modalActionCreators : bindActionCreators(modalActions,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);