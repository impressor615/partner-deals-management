import '@/assets/scss/_pagination.scss';

import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Pagination as BPagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';


class Pagination extends PureComponent {
  onFirstClick = (e) => {
    e.stopPropagation();
    const params = this.getParams();
    const page = params.get('page') || 1;
    if (page === 1) {
      return;
    }

    params.set('page', 1);
    this.move(params.toString());
  }

  onPreviousClick = (e) => {
    e.stopPropagation();
    const params = this.getParams();
    const page = params.get('page') || 1;
    if (page === 1) {
      return;
    }

    params.set('page', 1);
    params.set('page', parseInt(page, 10) - 1);

    this.move(params.toString());
  }

  onPageClick = page => (e) => {
    e.stopPropagation();
    const params = this.getParams();
    params.set('page', page);

    this.move(params.toString());
  }

  onNextClick = (e) => {
    e.stopPropagation();
    const { totalPages } = this.props;
    const params = this.getParams();
    const page = params.get('page') || 1;
    const intPage = parseInt(page, 10);
    if (intPage === totalPages) {
      return;
    }

    params.set('page', intPage + 1);
    this.move(params.toString());
  }

  onLastClick = (e) => {
    e.stopPropagation();
    const { totalPages } = this.props;
    const params = this.getParams();
    const page = params.get('page') || 1;
    const intPage = parseInt(page, 10);
    if (intPage === totalPages) {
      return;
    }

    params.set('page', totalPages);
    this.move(params.toString());
  }

  move = (queryString) => {
    const { location, history } = this.props;
    const { pathname } = location;
    history.push(`${pathname}?${queryString}`);
  }

  getParams = () => {
    const { location } = this.props;
    const { search } = location;
    const params = new URLSearchParams(search);
    return params;
  }

  getPager = () => {
    const {
      totalPages, pageSize, interval, currentPage,
    } = this.props;
    let start = 0;
    let end = 0;
    if (totalPages <= pageSize) {
      start = 1;
      end = totalPages;
    } else if (currentPage <= interval) {
      start = 1;
      end = pageSize;
    } else if (currentPage + interval >= totalPages) {
      start = totalPages - (pageSize - 1);
      end = totalPages;
    } else {
      start = currentPage - interval;
      end = currentPage + interval;
    }

    const length = (end - start) + 1;
    const pageNum = Array.from({ length }).map((_, i) => start + i);
    return pageNum;
  }

  render() {
    const {
      first, last, totalPages, currentPage,
    } = this.props;
    return (
      <BPagination>
        <div className="pagination-wrapper">
          <PaginationItem
            disabled={first}
            onClick={this.onFirstClick}
          >
            <PaginationLink>First</PaginationLink>
          </PaginationItem>
          <PaginationItem
            disabled={first}
            onClick={this.onPreviousClick}
          >
            <PaginationLink>Previous</PaginationLink>
          </PaginationItem>
          {
            this.getPager(totalPages, currentPage).map(page => (
              <PaginationItem key={page.toString()} active={page === currentPage}>
                <PaginationLink onClick={this.onPageClick(page)}>
                  { page }
                </PaginationLink>
              </PaginationItem>
            ))
          }
          <PaginationItem
            disabled={last}
            onClick={this.onNextClick}
          >
            <PaginationLink>Next</PaginationLink>
          </PaginationItem>
          <PaginationItem
            disabled={last}
            onClick={this.onLastClick}
          >
            <PaginationLink>Last</PaginationLink>
          </PaginationItem>
        </div>
      </BPagination>
    );
  }
}

Pagination.defaultProps = {
  pageSize: 11,
  interval: 5,
};

Pagination.propTypes = {
  pageSize: PropTypes.number,
  interval: PropTypes.number,
  first: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Pagination);
