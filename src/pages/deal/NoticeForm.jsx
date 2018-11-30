import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Label, Col, Input,
} from 'reactstrap';

import Segment from '@/components/Segment';


const NoticeForm = ({
  message, baggage, checkedBaggage, cancelFee, dayCancelFee, onChange,
}) => (
  <Segment title="유의사항">
    <FormGroup row>
      <Label xs={3}>딜 메시지</Label>
      <Col xs={9}>
        <Input
          type="text"
          id="message"
          value={message}
          onChange={onChange}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>기내 수화물</Label>
      <Col xs={9}>
        <Input
          type="text"
          id="baggage"
          value={baggage}
          onChange={onChange}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>위탁 수하물</Label>
      <Col xs={9}>
        <Input
          type="text"
          id="checkedBaggage"
          value={checkedBaggage}
          onChange={onChange}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>취소 수수로</Label>
      <Col xs={9}>
        <Input
          type="text"
          id="cancelFee"
          value={cancelFee}
          onChange={onChange}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>당일취소비용</Label>
      <Col xs={9}>
        <Input
          type="text"
          id="dayCancelFee"
          value={dayCancelFee}
          onChange={onChange}
        />
      </Col>
    </FormGroup>
  </Segment>
);

NoticeForm.defaultProps = {
  message: '',
  baggage: '',
  checkedBaggage: '',
  cancelFee: '',
  dayCancelFee: '',
};

NoticeForm.propTypes = {
  message: PropTypes.string,
  baggage: PropTypes.string,
  checkedBaggage: PropTypes.string,
  cancelFee: PropTypes.string,
  dayCancelFee: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default NoticeForm;
