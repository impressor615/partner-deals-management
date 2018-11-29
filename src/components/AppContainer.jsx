import React from 'react';
import PropTypes from 'prop-types';

import ErrorAlert from './ErrorAlert';


const AppContainer = ({ children }) => (
  <div className="app-container">
    { children }
    <ErrorAlert />
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
