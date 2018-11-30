import '@/assets/scss/_deal.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CONFIG from '@/config';
import {
  // getPartners,
  // getDestinations,
  getDeal,
  setLoading,
} from '@/actions';
import { HEADER } from '@/viewmodels/deal';
import Header from '@/components/Header';

import DealForm from './DealForm';


class Page extends PureComponent {
  state = {
    title: '',
    adCompany: '',
  }

  async componentDidMount() {
    const {
      token, dispatch, history, match,
    } = this.props;
    const accessToken = token || sessionStorage.getItem(CONFIG.SESSION_KEY);
    const data = { token: accessToken };

    dispatch(setLoading(true));
    // await dispatch(getPartners(data));
    // await dispatch(getDestinations(data));
    const result = await dispatch(getDeal({ ...data, id: match.params.id }));
    dispatch(setLoading(false));
    if (result.error) {
      history.replace('/login');
    }

    const { title, adCompany } = result.payload;
    this.setState({
      title,
      adCompany: adCompany.name ? adCompany.name : '',
    });
  }

  onChange = (e) => {
    e.stopPropagation();
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const { title, adCompany } = this.state;
    return (
      <div className="deal">
        <Header title={HEADER.title} navItems={HEADER.nav_items} />
        <DealForm
          title={title}
          adCompany={adCompany}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
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
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  token: state.user.access_token,
  ...state.deals.deal,
});
export default withRouter(connect(mapStateToProps)(Page));
