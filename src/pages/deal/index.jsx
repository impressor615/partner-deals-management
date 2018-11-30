import '@/assets/scss/_deal.scss';

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
  // getPartners,
  // getDestinations,
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
  }

  // TODO: getPartner access_denied 에러가 남
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

    const {
      title,
      adCompany,
      info,
      url,
      dealOption,
      weight,
      company,
      type,
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
