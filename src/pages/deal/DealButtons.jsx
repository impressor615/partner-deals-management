import React from 'react';
import { Button } from 'reactstrap';


const DealButtons = () => (
  <div className="deal-buttons">
    <Button type="submit" color="primary">SEND DEAL</Button>
    <Button type="button">긴급 입력 모드</Button>
  </div>
);

export default DealButtons;
