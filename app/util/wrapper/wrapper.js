import React from 'react';
import PropTypes from 'prop-types';
import './wrapper.scss';

const Wrapper = ({ children }) => <div className="wrapper">{children}</div>;

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
};


export default Wrapper;
