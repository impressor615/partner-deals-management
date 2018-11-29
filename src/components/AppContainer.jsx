import React from 'react';
import PropTypes from 'prop-types';

import ErrorAlert from './ErrorAlert';
import Loading from './Loading';


const AppContainer = ({ children }) => (
  <div className="app-container">
    { children }
    <ErrorAlert />
    <Loading />
  </div>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
