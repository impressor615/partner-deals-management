import React from 'react';
import {
  FormGroup, Label, Input, Col, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

import Segment from '@/components/Segment';


const ReservationPointForm = ({
  points,
  onAddPointClick,
  onPointChange,
  onPointCbChange,
}) => (
  <Segment
    className="reservation-point-form"
    title="예매 Point (문구형)"
    actions={[
      <Button
        type="button"
        onClick={onAddPointClick}
      >
        +필드추가
      </Button>,
    ]}
  >
    {
      points.map((point, index) => (
        <FormGroup row key={index.toString()}>
          <Col xs={3} className="reservation-point-checkbox-wrapper">
            <Input
              id={`deal-points-${index}`}
              addon
              type="checkbox"
              onChange={onPointCbChange(index)}
              checked={point.active}
            />
            <Label htmlFor={`deal-points-${index}`}>내용표시</Label>
          </Col>
          <Col xs={9}>
            <Input
              type="text"
              value={point.text}
              onChange={onPointChange(index)}
              disabled={!point.active}
            />
          </Col>
        </FormGroup>
      ))
    }
  </Segment>
);

ReservationPointForm.defaultProps = {
  points: [],
};

ReservationPointForm.propTypes = {
  points: PropTypes.array,
  onAddPointClick: PropTypes.func.isRequired,
  onPointChange: PropTypes.func.isRequired,
  onPointCbChange: PropTypes.func.isRequired,
};

export default ReservationPointForm;
