import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Row, Col, FormGroup, Input, Label,
} from 'reactstrap';

import DealButtons from './DealButtons';
import PartnerForm from './PartnerForm';
import NoticeForm from './NoticeForm';


const DealForm = ({
  title,
  adCompany,
  message,
  baggage,
  checkedBaggage,
  cancelFee,
  dayCancelFee,
  onChange,
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
};

DealForm.propTypes = {
  title: PropTypes.string,
  adCompany: PropTypes.string,
  message: PropTypes.string,
  baggage: PropTypes.string,
  checkedBaggage: PropTypes.string,
  cancelFee: PropTypes.string,
  dayCancelFee: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DealForm;
