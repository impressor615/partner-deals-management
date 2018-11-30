import React from 'react';
import { FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';

import Segment from '@/components/Segment';


const ReservationPointTextForm = ({
  info,
  onChange,
}) => (
  <Segment
    className="reservation-point-text-form"
    title="예매 Point (줄글형)"
  >
    <FormGroup>
      <textarea
        rows={10}
        onChange={onChange}
        value={info}
        id="info"
        placeholder="예매 Point 입력"
      />
    </FormGroup>
  </Segment>
);

ReservationPointTextForm.defaultProps = {
  info: '',
};

ReservationPointTextForm.propTypes = {
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ReservationPointTextForm;
