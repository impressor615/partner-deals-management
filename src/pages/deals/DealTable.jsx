import React from 'react';
import { Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { TABLE } from '@/viewmodels/deals';


const DealTable = ({ items, onClick }) => (
  <Table responsive hover>
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
          <tr key={item.id} onClick={onClick(item.id)}>
            <th scope="row">{item.id}</th>
            <td>{item.closed ? TABLE.data.closed : TABLE.data.open}</td>
            <td>{item.type}</td>
            <td width="15%">{item.title}</td>
            <td>{item.company ? item.company.name : ''}</td>
            <td>{item.adCompany ? item.adCompany.name : ''}</td>
            <td width="20%">{item.cityNames}</td>
            <td>{item.mainPrice.toLocaleString()}</td>
            <td>{item.likeCount.toLocaleString()}</td>
            <td>{item.commentCount.toLocaleString()}</td>
            <td>{item.viewCount.toLocaleString()}</td>
            <td>{item.viewCount.toLocaleString()}</td>
            <td>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                이동
              </a>
            </td>
            <td>
              <Button type="button" outline>ON</Button>
            </td>
          </tr>
        ))
      }
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="14">기본 set: 30 rows</td>
      </tr>
    </tfoot>
  </Table>
);

DealTable.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DealTable;
