import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CONFIG from '@/config';
import { getDeals } from '@/actions';
import Header from '@/components/Header';


class Page extends PureComponent {
  async componentDidMount() {
    const {
      token, dispatch, history, page,
    } = this.props;
    const accessToken = token || sessionStorage.getItem(CONFIG.SESSION_KEY);
    const data = {
      token: accessToken,
      queryString: `?page=${page}`,
    };
    const result = await dispatch(getDeals(data));
    if (result.error) {
      history.replace('/login');
    }
  }

  render() {
    return (
      <div className="home">
        <Header
          title="Deal List"
          navItems={['Home', 'Deal', 'Deal List']}
        />
      </div>
    );
  }
}

Page.defaultProps = {
  token: '',
};

Page.propTypes = {
  history: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const params = new URLSearchParams(location.search);
  const page = params.get('page') || '1';

  return {
    token: state.user.access_token,
    page,
    ...state.deals,
  };
};
export default withRouter(connect(mapStateToProps)(Page));
