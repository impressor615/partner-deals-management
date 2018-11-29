import '@/assets/scss/_error-alert.scss';

import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

import { clearError } from '@/actions';


class ErrorAlert extends PureComponent {
  onErrorClearClick = (e) => {
    e.stopPropagation();
    const { dispatch } = this.props;
    dispatch(clearError());
  }

  render() {
    const { error } = this.props;
    return (
      <Fragment>
        {
          error
            ? (
              <Alert
                className="error-alert"
                color="danger"
                toggle={this.onErrorClearClick}
              >
                {error}
              </Alert>
            )
            : null
        }
      </Fragment>
    );
  }
}

ErrorAlert.defaultProps = {
  error: '',
};

ErrorAlert.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = state => ({ error: state.commonUI.error });
export default connect(mapStateToProps)(ErrorAlert);
