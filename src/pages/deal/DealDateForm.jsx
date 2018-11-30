import React from 'react';
import {
  FormGroup, Label, Input, Col, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

import Segment from '@/components/Segment';


// TODO: Input time / am, pm 분리?
const DealDateForm = ({
  openDate,
  openTime,
  saleOpenDate,
  saleEndDate,
  dealOpenDate,
  dealEndDate,
  dealURL,
  onChange,
}) => (
  <Segment title="딜 날짜 정보">
    <FormGroup row>
      <Label xs={3}>딜 오픈일</Label>
      <Col xs={9}>
        <Input
          id="openDate"
          type="date"
          onChange={onChange}
          value={openDate}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>딜 오픈시각</Label>
      <Col xs={9}>
        <Input
          id="openTime"
          type="time"
          onChange={onChange}
          value={openTime}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>판매 시작일</Label>
      <Col xs={9}>
        <Input
          id="saleOpenDate"
          type="date"
          onChange={onChange}
          value={saleOpenDate}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>판매 종료일</Label>
      <Col xs={9}>
        <Input
          id="saleEndDate"
          type="date"
          onChange={onChange}
          value={saleEndDate}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>시작일</Label>
      <Col xs={9}>
        <Input
          id="dealOpenDate"
          type="date"
          onChange={onChange}
          value={dealOpenDate}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>종료일</Label>
      <Col xs={9}>
        <Input
          id="dealEndDate"
          type="date"
          onChange={onChange}
          value={dealEndDate}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>딜 URL</Label>
      <Col
        xs={9}
        className="deal-url-input-wrapper"
      >
        <Input
          id="dealURL"
          type="text"
          onChange={onChange}
          value={dealURL}
        />
        <Button type="button">주소 생성</Button>
      </Col>
    </FormGroup>
  </Segment>
);

DealDateForm.defaultProps = {
  openDate: '',
  openTime: '',
  saleOpenDate: '',
  saleEndDate: '',
  dealOpenDate: '',
  dealEndDate: '',
  dealURL: '',
};

DealDateForm.propTypes = {
  openDate: PropTypes.string,
  openTime: PropTypes.string,
  saleOpenDate: PropTypes.string,
  saleEndDate: PropTypes.string,
  dealOpenDate: PropTypes.string,
  dealEndDate: PropTypes.string,
  dealURL: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default DealDateForm;
