import React from 'react';
import PropTypes from 'prop-types';
import {
  Input, Button, Form, FormGroup, Label, Col,
} from 'reactstrap';


const DealSearch = ({
  id, value, onChange, onSubmit,
}) => (
  <div className="deals-search">
    <Form onSubmit={onSubmit}>
      <FormGroup row>
        <Label xs={12} lg={2}>Deal Search</Label>
        <Col xs={9} lg={6}>
          <Input
            id={id}
            value={value}
            onChange={onChange}
            type="text"
            placeholder="Deal ID or Title or 여행사/항공사 or Type"
          />
        </Col>
        <Col xs={3} lg={3}>
          <Button type="submit">검색</Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
);

DealSearch.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default DealSearch;
