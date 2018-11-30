import '@/assets/scss/pages/_deal.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  Label,
} from 'reactstrap';

import CONFIG from '@/config';
import {
  getPartners,
  getDestinations,
  getDeal,
  setLoading,
} from '@/actions';
import { HEADER } from '@/viewmodels/deal';
import Header from '@/components/Header';
import { readAsDataURL } from '@/utils/fileUtils';

import DealButtons from './DealButtons';
import PartnerForm from './PartnerForm';
import NoticeForm from './NoticeForm';
import ReservationPointForm from './ReservationPotintForm';
import ReservationPointTextForm from './ReservationPointTextForm';
import DealDateForm from './DealDateForm';
import AlignIndexForm from './AlignIndexForm';
import ImageForm from './ImageForm';
import TicketsForm from './TicketsForm';


class Page extends PureComponent {
  state = {
    title: '',
    adCompany: '',
    message: '',
    cabinBaggage: '',
    referralBaggage: '',
    cancelFee: '',
    theDayCancelFee: '',
    dealPoints: [{ text: '', active: true }],
    info: '',
    openDate: '',
    openTime: '',
    saleOpenDate: '',
    saleEndDate: '',
    dealOpenDate: '',
    dealEndDate: '',
    dealURL: '',
    weight: 50,
    score: 50,
    images: [],
    companyName: '',
    type: '',
    tickets: [],
  }

  // TODO: getPartner access_denied 에러가 남
  async componentDidMount() {
    const {
      token, dispatch, history, match,
    } = this.props;
    const accessToken = token || sessionStorage.getItem(CONFIG.SESSION_KEY);
    const data = { token: accessToken };

    dispatch(setLoading(true));
    await dispatch(getPartners(data));
    await dispatch(getDestinations(data));
    const result = await dispatch(getDeal({ ...data, id: match.params.id }));
    dispatch(setLoading(false));
    if (result.error) {
      history.replace('/login');
    }

    const {
      title,
      adCompany,
      info,
      url,
      dealOption,
      weight,
      company,
      type,
      tickets,
    } = result.payload;
    this.setState({
      title,
      info,
      dealURL: url,
      cabinBaggage: dealOption.cabinBaggage ? dealOption.cabinBaggage : '',
      cancelFee: dealOption.cancelFee ? dealOption.cancelFee : '',
      theDayCancelFee: dealOption.theDayCancelFee ? dealOption.theDayCancelFee : '',
      referralBaggage: dealOption.referralBaggage ? dealOption.referralBaggage : '',
      adCompany: adCompany.name ? adCompany.name : '',
      weight: weight || 50,
      type,
      companyName: company.name ? company.name : '',
      tickets: tickets.reduce((current, next) => {
        const nextData = {
          departure: next.departure.airportName,
          arrival: [{
            name: next.arrival.airportName,
            price: next.price,
            roundTripPrice: next.price * 2,
          }],
        };
        current.push(nextData);
        return current;
      }, []),
    });
  }

  onChange = (e) => {
    e.stopPropagation();
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  onAddPointClick = (e) => {
    e.stopPropagation();
    const { dealPoints } = this.state;
    const newPoints = [...dealPoints];
    newPoints.push({ text: '', active: true });
    this.setState({ dealPoints: newPoints });
  }

  onPointChange = index => (e) => {
    e.stopPropagation();
    const { value } = e.target;
    const { dealPoints } = this.state;
    const newPoints = [...dealPoints];
    newPoints[index] = { ...newPoints[index], text: value };
    this.setState({ dealPoints: newPoints });
  }

  onPointCbChange = index => (e) => {
    e.stopPropagation();
    const { checked } = e.target;
    const { dealPoints } = this.state;
    const newPoints = [...dealPoints];
    newPoints[index] = { ...newPoints[index], active: checked };
    this.setState({ dealPoints: newPoints });
  }

  onImageChange = async (e) => {
    e.stopPropagation();
    const { dispatch } = this.props;
    const file = e.target.files[0];
    dispatch(setLoading(true));
    const dataURL = await readAsDataURL(file);
    dispatch(setLoading(false));
    const { images } = this.state;
    const newImages = [...images];
    newImages.push({ file, dataURL });

    this.setState({ images: newImages });
  }

  onImageDeleteClick = index => (e) => {
    e.stopPropagation();
    const { images } = this.state;
    const newImages = [...images];
    newImages.splice(index, 1);
    this.setState({ images: newImages });
  }

  onTicketInputChange = ({ index, subIndex }) => (e) => {
    e.stopPropagation();
    const { tickets } = this.state;
    const { id, value } = e.target;
    const newTickets = [...tickets];
    const newArrival = newTickets[index].arrival;
    newArrival[subIndex][id] = parseInt(value, 10) || value;
    newTickets[index].arrival = newArrival;
    this.setState({ tickets: newTickets });
  }

  onArrivalAddClick = index => (e) => {
    e.stopPropagation();
    const { tickets } = this.state;
    const data = {
      name: '',
      price: 0,
      roundTripPrice: 0,
    };
    const newTickets = [...tickets];
    newTickets[index].arrival.push(data);
    this.setState({ tickets: newTickets });
  }

  onArrivalRemoveClick = ({ index, subIndex }) => (e) => {
    e.stopPropagation();
    const { tickets } = this.state;
    const newTickets = [...tickets];
    const newArrival = newTickets[index].arrival;
    newArrival.splice(subIndex, 1);
    newTickets[index].arrival = newArrival;
    this.setState({ tickets: newTickets });
  }

  // TODO: 딜 생성/수정 action 연결 필요
  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const {
      title,
      adCompany,
      message,
      cabinBaggage,
      referralBaggage,
      cancelFee,
      theDayCancelFee,
      dealPoints,
      info,
      openDate,
      openTime,
      saleOpenDate,
      saleEndDate,
      dealOpenDate,
      dealEndDate,
      dealURL,
      weight,
      score,
      images,
      companyName,
      type,
      tickets,
    } = this.state;
    return (
      <div className="deal">
        <Header title={HEADER.title} navItems={HEADER.nav_items} />
        <Form className="deal-form" onSubmit={this.onSubmit}>
          <DealButtons />
          <Row>
            <Col xs={5}>
              <FormGroup className="deal-title-form">
                <Label>제목</Label>
                <Input
                  type="text"
                  id="title"
                  value={title}
                  onChange={this.onChange}
                />
              </FormGroup>
              <PartnerForm
                type={type}
                companyName={companyName}
                adCompany={adCompany}
                onChange={this.onChange}
              />
              <NoticeForm
                message={message}
                cabinBaggage={cabinBaggage}
                referralBaggage={referralBaggage}
                cancelFee={cancelFee}
                theDayCancelFee={theDayCancelFee}
                onChange={this.onChange}
              />
              <ReservationPointForm
                points={dealPoints}
                onAddPointClick={this.onAddPointClick}
                onPointChange={this.onPointChange}
                onPointCbChange={this.onPointCbChange}
              />
              <ReservationPointTextForm
                info={info}
                onChange={this.onChange}
              />
              <DealDateForm
                openDate={openDate}
                openTime={openTime}
                saleOpenDate={saleOpenDate}
                saleEndDate={saleEndDate}
                dealOpenDate={dealOpenDate}
                dealEndDate={dealEndDate}
                dealURL={dealURL}
                onChange={this.onChange}
              />
              <AlignIndexForm
                weight={weight}
                score={score}
                onChange={this.onChange}
              />
            </Col>
            <Col xs={2} />
            <Col xs={5}>
              <ImageForm
                images={images}
                onImageChange={this.onImageChange}
                onImageDeleteClick={this.onImageDeleteClick}
              />
              <TicketsForm
                tickets={tickets}
                onTicketInputChange={this.onTicketInputChange}
                onArrivalAddClick={this.onArrivalAddClick}
                onArrivalRemoveClick={this.onArrivalRemoveClick}
              />
            </Col>
          </Row>
        </Form>
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
