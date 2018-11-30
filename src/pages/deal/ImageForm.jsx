import React from 'react';
import {
  FormGroup, Col, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

import Segment from '@/components/Segment';
import FileButton from '@/components/FileButton';


const ImageSegment = ({ src, filename }) => (
  <div className="image-segment">
    <span><img src={src} alt="promotion" /></span>
    <span>{filename}</span>
  </div>
);

ImageSegment.propTypes = {
  src: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
};

const ImageForm = ({ images, onImageChange, onImageDeleteClick }) => (
  <Segment title="프로모션 이미지" className="deal-image-form">
    <div className="deal-image-form-button-wrapper">
      <FileButton id="image" onChange={onImageChange}>
        Choose Files
      </FileButton>
      <span>{`총 ${images.length}개의 이미지`}</span>
    </div>
    {
      images.map((image, index) => (
        <div
          className="deal-image-form-img-wrapper"
          key={index.toString()}
        >
          <FormGroup row>
            <Col xs={9}>
              <ImageSegment
                src={image.dataURL}
                filename={image.file.name}
              />
            </Col>
            <Col xs={3}>
              <Button
                type="button"
                onClick={onImageDeleteClick(index)}
              >
                삭제
              </Button>
            </Col>
          </FormGroup>
        </div>
      ))
    }
  </Segment>
);

ImageForm.propTypes = {
  images: PropTypes.array.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onImageDeleteClick: PropTypes.func.isRequired,
};

export default ImageForm;
