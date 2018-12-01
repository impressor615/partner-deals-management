import '@/assets/scss/_bar-chart.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


const Line = ({ numMarker }) => (
  <div className="line">
    <span>{numMarker.toLocaleString()}</span>
  </div>
);

Line.propTypes = {
  numMarker: PropTypes.number.isRequired,
};

const ItemMarker = ({ children, length }) => (
  <div
    className="item-marker"
    style={{ flexBasis: `${(100 / length).toFixed(0)}%` }}
  >
    {children}
  </div>
);

ItemMarker.propTypes = {
  children: PropTypes.node.isRequired,
  length: PropTypes.number.isRequired,
};

const Bar = ({
  value, interval, width, index, offset,
}) => (
  <div
    className="bar"
    style={{
      height: `${((value * 80) / interval).toFixed(0)}px`,
      width: `${width}px`,
      transform: `translate(${width * index}px, -${offset}px)`,
    }}
  >
    <div />
  </div>
);

Bar.propTypes = {
  value: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
};

class BarChart extends PureComponent {
  state = {
    markerWidth: 0,
    markerHeight: 0,
  }

  componentDidMount() {
    this.resizeEvent = () => {
      const { offsetWidth, offsetHeight } = document.getElementsByClassName('item-marker')[0];
      this.setState({
        markerWidth: offsetWidth,
        markerHeight: offsetHeight,
      });
    };
    this.resizeEvent();
    window.addEventListener('resize', this.resizeEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeEvent);
  }


  getOptions = () => {
    const {
      max, interval, itemMarkers, values,
    } = this.props;
    const blockCount = Math.floor(max / interval) + 1;
    const numMarker = Array.from({ length: blockCount }).map((_, i, array) => (
      (array.length - i) * interval
    ));
    return {
      numMarker,
      itemMarkers,
      values,
      interval,
    };
  }

  render() {
    const {
      numMarker, itemMarkers, values, interval,
    } = this.getOptions();
    const { markerWidth, markerHeight } = this.state;
    return (
      <div className="bar-chart">
        {
          numMarker.map((marker, i) => (
            <Line key={i.toString()} numMarker={marker} />
          ))
        }
        <div className="item-marker-wrapper">
          {
            itemMarkers.map((marker, index, array) => (
              <ItemMarker key={index.toString()} length={array.length}>
                {marker}
              </ItemMarker>
            ))
          }
        </div>
        <div className="bar-wrapper">
          {
            values.map((value, index) => (
              <Bar
                key={index.toString()}
                index={index}
                value={value}
                interval={interval}
                width={markerWidth}
                offset={markerHeight}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

BarChart.defaultProps = {
  interval: 20000,
};

BarChart.propTypes = {
  interval: PropTypes.number,
  itemMarkers: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
  max: PropTypes.number.isRequired,
};


export default BarChart;
