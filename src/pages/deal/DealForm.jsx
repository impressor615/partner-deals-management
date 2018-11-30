import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';

import DealButtons from './DealButtons';


const DealForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <DealButtons />
  </Form>
);

DealForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DealForm;
