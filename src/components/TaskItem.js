import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {faStar} from '@fortawesome/free-regular-svg-icons';// viền bên ngoài icon
import {faEdit} from '@fortawesome/free-solid-svg-icons';// tô cả icon
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';// tô cả icon

class TaskItem extends Component{
	render(){
		var {task,status,onEditing,onShowForm} = this.props;
		return(
			<div className='box border pl-3 pt-3 pr-5 pb-5 mb-2' key={task.id}>
					<div className='d-flex'>
						<div className='mr-auto'>{task.title}</div>
						<div className=''>{status.label}</div>
					</div>
					<div><i>Description: </i>{task.description}</div>
					<FontAwesomeIcon icon={faEdit} color='#8470FF' style={{fontSize:'30px',cursor:'pointer',position:'relative',top:'40px',left:'84%'}} 
						onClick={() => onEditing(task)}
					/>
					<FontAwesomeIcon icon={faTrashAlt} color='#FF00CC' style={{fontSize:'30px',cursor:'pointer',position:'relative',top:'40px',left:'87%'}} 
						onClick={() => onShowForm(task)}
					/>
			</div>
		);
	}
}

export default TaskItem;