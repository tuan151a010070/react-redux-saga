import React,{Component} from 'react';
//import TaskForm from './TaskForm';
import './../App.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from './../actions/modal';
import PropTypes from 'prop-types';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {faStar} from '@fortawesome/free-regular-svg-icons';// viền bên ngoài icon
import {faEdit} from '@fortawesome/free-solid-svg-icons';// tô cả icon*/

class Modal extends Component{
	closeForm = () =>{
		var {hideModal} = this.props.modalActionCreators;
		hideModal();
	}
	render(){
		var {modalTitle,modalContent} = this.props;
		return(
			<div>
				<div onClick={this.closeForm} className='ml-5' style={{width:'100%',height:'100%',position:'fixed',background:'black',zIndex:'1',top:0,left:'-3.1%',opacity:'0.7'}}>
				</div>
				<div className='p-3 rounded' style={{width:'400px',background:'white',zIndex:'9999',position:'fixed',left:'35%',top:'30%'}}>
					<div className='font-weight-bold mb-5'>{modalTitle}</div>
					{modalContent}
				</div>
			</div>
		);
	}
}

Modal.propTypes ={
	modalTitle: PropTypes.string,
	modalContent: PropTypes.object,
	modalActionCreators: PropTypes.shape({
		hideModal: PropTypes.func
	})
}

const mapStateToProps = state =>{
	return{
		modalTitle : state.modal.title,
		modalContent : state.modal.component
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		modalActionCreators: bindActionCreators(modalActions,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);