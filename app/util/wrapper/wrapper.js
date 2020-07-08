import React from 'react';
import PropTypes from 'prop-types';
import './wrapper.scss';

const Wrapper = ({ children }) => {
	console.log( children.length );
	if ( children.length > 1 ) {
		return children.map( item => <div className="wrapper">{item}</div> );
	}
	return <div className="wrapper">{children}</div>;
};

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
};


export default Wrapper;
