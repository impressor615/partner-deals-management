import React from 'react';
import {
  FormGroup, Label, Input, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

import Segment from '@/components/Segment';


const AlignIndexForm = ({
  weight,
  score,
  onChange,
}) => (
  <Segment title="딜 정렬지수">
    <FormGroup row>
      <Label xs={3}>가중치</Label>
      <Col xs={9}>
        <Input
          id="weight"
          type="number"
          value={weight}
          onChange={onChange}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label xs={3}>Score</Label>
      <Col xs={9}>
        <Input
          type="number"
          id="score"
          value={score}
          onChange={onChange}
        />
      </Col>
    </FormGroup>
  </Segment>
);

AlignIndexForm.defaultProps = {
  weight: 0,
  score: 0,
};

AlignIndexForm.propTypes = {
  score: PropTypes.number,
  weight: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default AlignIndexForm;
