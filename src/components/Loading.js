import React,{Component} from 'react';
import './../App.css';
import loading from './../images/loading.gif';
import {connect} from 'react-redux';
class Loading extends Component{
	render(){
		var result = 	<div className='loading' >
							<img src={loading} alt='loading'/>
						</div>;
		var { isShowLoading} = this.props.loading;
			result = isShowLoading === true ? result : '';
		return(	
			<div>
				{result}
			</div>
		);
	}
}

const mapStateToProps = state =>{
	return{
		loading: state.loading
	}
}

export default  connect(mapStateToProps,null)(Loading);