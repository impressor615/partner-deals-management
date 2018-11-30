import '@/assets/scss/pages/_deals.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CONFIG from '@/config';
import { getDeals } from '@/actions';
import Header from '@/components/Header';
import { HEADER } from '@/viewmodels/deals';

import DealSearch from './DealSearch';
import DealTable from './DealTable';


class Page extends PureComponent {
  state = {
    search: '',
  }

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

  onChange = (e) => {
    e.stopPropagation();
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  onTableClick = dealId => (e) => {
    e.stopPropagation();
    const { history } = this.props;
    history.push(`/deals/${dealId}`);
  }

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const { search } = this.state;
    const { content } = this.props;
    return (
      <div className="deals">
        <div className="deals-navbar-wrapper">
          <Header title={HEADER.title} navItems={HEADER.nav_item} />
          <DealSearch
            id="search"
            value={search}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </div>
        <hr />
        <div className="deals-table-wrapper">
          <DealTable items={content} onClick={this.onTableClick} />
        </div>
      </div>
    );
  }
}

Page.defaultProps = {
  token: '',
  content: [],
};

Page.propTypes = {
  history: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
  token: PropTypes.string,
  content: PropTypes.array,
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
