import '@/assets/scss/pages/_partners.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '@/components/Header';
import Pagination from '@/components/Pagination';
import BarChart from '@/components/BarChart';
import { HEADER } from '@/viewmodels/partners';
// import {
//   getPartners,
//   getPartnerDeals,
//   getPartnerDealDailyData,
// } from '@/actions';
// import CONFIG from '@/config';

import PartnerInputs from './PartnerInputs';
import PartnerDealsTable from './PartnerDealsTable';


class Page extends PureComponent {
  state = {
    isOpen: false,
    partner: 'TW',
    type: 'deal',
  }

  // TODO: getPartners, getPartnerDeals, getPartnerDealDailyData access_denied 에러가 납니다.
  async componentDidMount() {
    // const {
    //   token, dispatch,
    // } = this.props;
    // const accessToken = token || sessionStorage.getItem(CONFIG.SESSION_KEY);
    // const data = { token: accessToken, dealId: 1997 };
    // await dispatch(getPartnerDealDailyData(data));
    // await dispatch(getPartners(data));
    // await dispatch(getPartnerDealDailyData(data));
    // const result = await dispatch(getPartnerDeals({
    //   ...data,
    //   companyId: match.params.id || '3',
    //   queryString: `?page=${page}`,
    // }));
    // if (result.error) {
    //   history.push('/login');
    // }
  }

  onDropdownToggle = (e) => {
    e.stopPropagation();
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  onDropdownClick = code => (e) => {
    e.stopPropagation();
    this.setState({ partner: code });
  }

  onRadioButtonClick = (e) => {
    e.stopPropagation();
    const { name } = e.target;
    this.setState({ type: name });
  }

  getInputOptions = () => {
    const { isOpen, partner, type } = this.state;
    return {
      ddOptions: {
        isOpen,
        toggle: this.onDropdownToggle,
        onClick: this.onDropdownClick,
        value: partner,
      },
      radioOptions: {
        value: type,
        onClick: this.onRadioButtonClick,
      },
    };
  }

  getChartOptions = () => {
    const { dailyData } = this.props;
    const max = dailyData.sort((a, b) => b.totalSiteCount - a.totalSiteCount)[0].totalSiteCount;
    return {
      max,
      itemMarkers: dailyData.map(item => item.title),
      values: dailyData.map(item => item.totalSiteCount),
    };
  }

  render() {
    const { partners, deals } = this.props;
    return (
      <div className="partners">
        <div className="partners-header-wrapper">
          <Header title={HEADER.title} navItems={HEADER.nav_items} />
          <PartnerInputs partners={partners} {...this.getInputOptions()} />
        </div>
        <BarChart {...this.getChartOptions()} />
        <div className="partners-table-wrapper">
          <PartnerDealsTable items={deals} />
        </div>
        <div className="partners-pagination-wrapper">
          <Pagination first last={false} totalPages={11} currentPage={1} />
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  partners: PropTypes.array.isRequired,
  dailyData: PropTypes.array.isRequired,
  deals: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  partners: state.deals.partners,
  dailyData: state.partnerDeals.daily_data,
  deals: state.partnerDeals.deals,
});
export default withRouter(connect(mapStateToProps)(Page));
