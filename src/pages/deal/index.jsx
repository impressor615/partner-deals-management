import '@/assets/scss/_deal.scss';

import React, { PureComponent } from 'react';
import Promise from 'bluebird';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CONFIG from '@/config';
import {
  getPartners, getDestinations, getDeal, setLoading,
} from '@/actions';
import { HEADER } from '@/viewmodels/deal';
import Header from '@/components/Header';


class Page extends PureComponent {
  componentDidMount() {
    const {
      token, dispatch, history, match,
    } = this.props;
    const accessToken = token || sessionStorage.getItem(CONFIG.SESSION_KEY);
    const data = { token: accessToken };

    dispatch(setLoading(true));
    return Promise.props({
      partner: dispatch(getPartners(data)),
      destinations: dispatch(getDestinations(data)),
      deal: dispatch(getDeal({ ...data, id: match.params.id })),
    }).then(({ deal }) => {
      dispatch(setLoading(false));
      if (deal.error) {
        history.replace('/login');
      }
    });
  }


  render() {
    return (
      <div className="deal">
        <Header title={HEADER.title} navItems={HEADER.nav_items} />
      </div>
    );
  }
}

Page.defaultProps = {
  token: '',
};

Page.propTypes = {
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  token: state.user.access_token,
});
export default withRouter(connect(mapStateToProps)(Page));
