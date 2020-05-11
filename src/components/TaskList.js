import React,{Component} from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component{
	render(){
		var {task,status,onEditing} = this.props;
		return(
			<div className='col-4' key={status.value}>
				<div className='font-weight-bold'>{status.label}</div>
				{
					task.map((task,index)=>{
					return 	<TaskItem task={task} status={status} key={index} onEditing={onEditing} onShowForm={this.props.onShowForm}/>
					})
				}
			</div>	
		);
	}
}

export default TaskList;