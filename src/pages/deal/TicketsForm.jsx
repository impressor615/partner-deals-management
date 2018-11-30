import React, { Fragment } from 'react';
import {
  FormGroup, Label, Input, Col, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

import Segment from '@/components/Segment';


const InputGroupWithButton = ({
  name,
  price,
  roundTripPrice,
  onChange,
  onRemoveClick,
}) => (
  <FormGroup row>
    <Col xs={5}>
      <Input
        id="name"
        type="text"
        placeholder="도착지"
        onChange={onChange}
        value={name}
      />
    </Col>
    <Col xs={3}>
      <Input
        id="price"
        type="number"
        placeholder="편도가격"
        onChange={onChange}
        value={parseInt(price, 10)}
      />
    </Col>
    <Col xs={3}>
      <Input
        id="roundTripPrice"
        type="number"
        placeholder="왕복가격(미입력시 편도*2)"
        onChange={onChange}
        value={roundTripPrice}
      />
    </Col>
    <Col xs={1}>
      <Button
        type="button"
        onClick={onRemoveClick}
      >
        x
      </Button>
    </Col>
  </FormGroup>
);

InputGroupWithButton.defaultProps = {
  name: '',
  price: 0,
  roundTripPrice: 0,
};

InputGroupWithButton.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  roundTripPrice: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

// TODO: 출발지 / 도착지 데이터 구성 다시 확인
const TicketsForm = ({
  tickets,
  onArrivalAddClick,
  onArrivalRemoveClick,
  onTicketInputChange,
}) => (
  <Segment title="출발지 선택" className="ticket-form">
    {
      tickets.map((ticket, index) => (
        <Fragment key={index.toString()}>
          <FormGroup row>
            <Col xs={9} className="ticket-form-cb-wrapper">
              <Input
                addon
                checked
                type="checkbox"
                readOnly
              />
              <Label>{ticket.departure}</Label>
            </Col>
            <Col xs={3}>
              <Button
                type="button"
                onClick={onArrivalAddClick(index)}
              >
                +입력테이블 추가
              </Button>
            </Col>
          </FormGroup>
          {
            ticket.arrival.map((item, subIndex) => (
              <InputGroupWithButton
                key={subIndex.toString()}
                onChange={onTicketInputChange({ index, subIndex })}
                onRemoveClick={onArrivalRemoveClick({ index, subIndex })}
                {...item}
              />
            ))
          }
          <Button
            block
            type="button"
            className="add-button"
            onClick={onArrivalAddClick(index)}
          >
            + 추가
          </Button>
          <hr />
        </Fragment>
      ))
    }
    <div className="ticket-form-show-price-wrapper">
      <Input addon id="show-price" type="checkbox" />
      <Label htmlFor="show-price">편도가격 미노출</Label>
    </div>
  </Segment>
);

TicketsForm.defaultProps = {
  tickets: [],
};

TicketsForm.propTypes = {
  tickets: PropTypes.array,
  onArrivalAddClick: PropTypes.func.isRequired,
  onArrivalRemoveClick: PropTypes.func.isRequired,
  onTicketInputChange: PropTypes.func.isRequired,
};

export default TicketsForm;
