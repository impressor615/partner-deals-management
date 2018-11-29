import '@/assets/scss/_loading.scss';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Loading = ({ loading }) => (
  <Fragment>
    { loading ? <div className="loading">Loading...</div> : null }
  </Fragment>
);

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ loading: state.commonUI.loading });
export default connect(mapStateToProps)(Loading);
