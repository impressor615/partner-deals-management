import '@/assets/scss/pages/_deals.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CONFIG from '@/config';
import { getDeals, setLoading } from '@/actions';
import Header from '@/components/Header';
import Pagination from '@/components/Pagination';
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
    dispatch(setLoading(true));
    const result = await dispatch(getDeals(data));
    if (result.error) {
      dispatch(setLoading(false));
      history.replace('/login');
    }
  }

  async componentDidUpdate(prevProps) {
    const { page, token, dispatch } = this.props;
    if (prevProps.page === page) {
      return;
    }

    const accessToken = token || sessionStorage.getItem(CONFIG.SESSION_KEY);
    const data = {
      token: accessToken,
      queryString: `?page=${page}`,
    };
    dispatch(setLoading(true));
    await dispatch(getDeals(data));
    dispatch(setLoading(false));
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
    const {
      content, first, last, totalPages, page,
    } = this.props;
    return (
      <div className="deals">
        <div className="deals-fixed-container">
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
        </div>
        <div className="deals-table-wrapper">
          <DealTable items={content} onClick={this.onTableClick} />
        </div>
        <div className="deals-pagination-wrapper">
          <Pagination
            currentPage={parseInt(page, 10)}
            totalPages={totalPages}
            first={first}
            last={last}
          />
        </div>
      </div>
    );
  }
}

Page.defaultProps = {
  token: '',
  content: [],
  first: false,
  last: true,
  totalPages: 1,
};

Page.propTypes = {
  history: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
  token: PropTypes.string,
  content: PropTypes.array,
  first: PropTypes.bool,
  last: PropTypes.bool,
  totalPages: PropTypes.number,
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
