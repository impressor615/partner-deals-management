import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

import { TABLE } from '@/viewmodels/partners';


const PartnerDealsTable = ({ items }) => (
  <Table hover>
    <thead>
      <tr>
        {
          TABLE.head.map(item => (
            <th key={item}>{item}</th>
          ))
        }
      </tr>
    </thead>
    <tbody>
      {
        items.map(item => (
          <tr key={item.id}>
            <th scope="row">{item.title}</th>
            <td>{`${item.startDate} ~ ${item.endDate}`}</td>
            <td>{item.totalItemViewCount}</td>
            <td>{item.totalViewCount}</td>
            <td>{item.totalSiteCount}</td>
            <td>
              {`${((item.totalSiteCount / item.totalViewCount) * 100).toFixed(3)}%`}
            </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

PartnerDealsTable.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PartnerDealsTable;
