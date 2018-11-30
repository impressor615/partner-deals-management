import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Row, Col, FormGroup, Input, Label,
} from 'reactstrap';

import DealButtons from './DealButtons';
import PartnerForm from './PartnerForm';


const DealForm = ({
  title, adCompany, onChange, onSubmit,
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
};

DealForm.propTypes = {
  title: PropTypes.string,
  adCompany: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DealForm;
