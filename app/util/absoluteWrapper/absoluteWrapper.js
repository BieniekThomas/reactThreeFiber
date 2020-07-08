import React from 'react';
import PropTypes from 'prop-types';

const absoluteWrapper = ({ children }) => <div className="absoluteWrapper">{children || null}</div>;
absoluteWrapper.propTypes = { children: PropTypes.node.isRequired };

export default absoluteWrapper;
