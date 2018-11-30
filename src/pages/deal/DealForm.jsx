import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Row, Col, FormGroup, Input, Label,
} from 'reactstrap';

import DealButtons from './DealButtons';
import PartnerForm from './PartnerForm';
import NoticeForm from './NoticeForm';
import ReservationForm from './ReservationPotintForm';


const DealForm = ({
  title,
  adCompany,
  message,
  baggage,
  checkedBaggage,
  cancelFee,
  dayCancelFee,
  reservationPoints,
  onChange,
  onAddPointClick,
  onPointChange,
  onPointCbChange,
  onSubmit,
}) => (
  <Form className="deal-form" onSubmit={onSubmit}>
    <DealButtons />
    <Row>
      <Col xs={5}>
        <FormGroup className="deal-title-form">
          <Label>제목</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={onChange}
          />
        </FormGroup>
        <PartnerForm onChange={onChange} adCompany={adCompany} />
        <NoticeForm
          message={message}
          baggage={baggage}
          checkedBaggage={checkedBaggage}
          cancelFee={cancelFee}
          dayCancelFee={dayCancelFee}
          onChange={onChange}
        />
        <ReservationForm
          points={reservationPoints}
          onAddPointClick={onAddPointClick}
          onPointChange={onPointChange}
          onPointCbChange={onPointCbChange}
        />
      </Col>
      <Col xs={2} />
      <Col xs={5}>
        right side
      </Col>
    </Row>
  </Form>
);

DealForm.defaultProps = {
  title: '',
  adCompany: '',
  message: '',
  baggage: '',
  checkedBaggage: '',
  cancelFee: '',
  dayCancelFee: '',
  reservationPoints: [],
};

DealForm.propTypes = {
  title: PropTypes.string,
  adCompany: PropTypes.string,
  message: PropTypes.string,
  baggage: PropTypes.string,
  checkedBaggage: PropTypes.string,
  cancelFee: PropTypes.string,
  dayCancelFee: PropTypes.string,
  reservationPoints: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onAddPointClick: PropTypes.func.isRequired,
  onPointChange: PropTypes.func.isRequired,
  onPointCbChange: PropTypes.func.isRequired,
};

export default DealForm;
