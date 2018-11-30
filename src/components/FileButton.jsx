import '@/assets/scss/_file-button.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'reactstrap';

const FileButton = ({
  id,
  children,
  accept,
  onChange,
}) => (
  <Label
    htmlFor={id}
    className="file-button"
  >
    {children}
    <input
      id={id}
      type="file"
      onChange={onChange}
      accept={accept}
    />
  </Label>
);

FileButton.defaultProps = {
  children: '',
  accept: 'image/*',
};

FileButton.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
};

export default FileButton;
