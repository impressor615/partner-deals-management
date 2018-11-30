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
    message: '',
    baggage: '',
    checkedBaggage: '',
    cancelFee: '',
    dayCancelFee: '',
    reservationPoints: [{ text: '', active: true }],
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

  onAddPointClick = (e) => {
    e.stopPropagation();
    const { reservationPoints } = this.state;
    const newPoints = [...reservationPoints];
    newPoints.push({ text: '', active: true });
    this.setState({ reservationPoints: newPoints });
  }

  onPointChange = index => (e) => {
    e.stopPropagation();
    const { value } = e.target;
    const { reservationPoints } = this.state;
    const newPoints = [...reservationPoints];
    newPoints[index] = { ...newPoints[index], text: value };
    this.setState({ reservationPoints: newPoints });
  }

  onPointCbChange = index => (e) => {
    e.stopPropagation();
    const { checked } = e.target;
    const { reservationPoints } = this.state;
    const newPoints = [...reservationPoints];
    newPoints[index] = { ...newPoints[index], active: checked };
    this.setState({ reservationPoints: newPoints });
  }

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const {
      title,
      adCompany,
      message,
      baggage,
      checkedBaggage,
      cancelFee,
      dayCancelFee,
      reservationPoints,
    } = this.state;
    return (
      <div className="deal">
        <Header title={HEADER.title} navItems={HEADER.nav_items} />
        <DealForm
          title={title}
          adCompany={adCompany}
          message={message}
          baggage={baggage}
          checkedBaggage={checkedBaggage}
          cancelFee={cancelFee}
          dayCancelFee={dayCancelFee}
          reservationPoints={reservationPoints}
          onChange={this.onChange}
          onAddPointClick={this.onAddPointClick}
          onPointChange={this.onPointChange}
          onPointCbChange={this.onPointCbChange}
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
