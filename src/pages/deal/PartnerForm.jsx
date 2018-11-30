import React from 'react';
import {
  FormGroup, Label, Input, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

import Segment from '@/components/Segment';


// TODO: 항공사 / 딜 타입 검색 가능한 Dropdown으로 변경
const PartnerForm = ({ adCompany, onChange }) => (
  <Segment title="진행 업체">
    <FormGroup row>
      <Label xs={3}>항공사 / 여행사</Label>
      <Col xs={9}>
        <Input />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>광고대행사</Label>
      <Col xs={9}>
        <Input
          type="text"
          id="adCompany"
          value={adCompany}
          onChange={onChange}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>딜 타입</Label>
      <Col xs={9}>
        <Input />
      </Col>
    </FormGroup>
  </Segment>
);

PartnerForm.defaultProps = {
  adCompany: '',
};

PartnerForm.propTypes = {
  adCompany: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default PartnerForm;
