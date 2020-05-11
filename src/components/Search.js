import React,{Component} from 'react';
import './../App.css';
import {connect} from 'react-redux';
class Search extends Component{
	render(){
		var {handleSearch} = this.props;
		return(	
			<div className='search'>
				<input type='text' placeholder='Search...' onChange={handleSearch}/>
			</div>
		);
	}
}

const mapStateToProps = state =>{
	return{
		
	}
}

export default  connect(mapStateToProps,null)(Search);