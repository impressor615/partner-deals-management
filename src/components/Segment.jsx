import '@/assets/scss/_segment.scss';

import React, { Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const Segment = ({
  title,
  children,
  actions,
  ...rest
}) => (
  <div className={classnames('segment', rest.className)}>
    <div className="segment-title-wrapper">
      <h4>{title}</h4>
      <div className="segment-actions-wrapper">
        { actions.map((action, index) => (
          <Fragment key={index.toString()}>{action}</Fragment>
        )) }
      </div>
    </div>
    {children}
  </div>
);

Segment.defaultProps = {
  actions: [],
};

Segment.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  actions: PropTypes.array,
};

export default Segment;
