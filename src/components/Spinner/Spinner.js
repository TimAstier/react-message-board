import React, { Component } from 'react';
import propTypes from 'prop-types';
import spinner from '../../images/spinner.svg';

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = { display: !this.props.delay };
  }

  componentDidMount() {
    if (this.props.delay) {
      this.displayLoader = setTimeout(
        () => this.setState({ display: true }),
        this.props.delay
      );
    }
  }

  // To avoid setting the state on an unmounted component
  // See: https://stackoverflow.com/questions/32903001/react-setstate-on-unmounted-component
  componentWillUnmount() {
    this.displayLoader && clearInterval(this.displayLoader);
    this.displayLoader = false;
  }

  render() {
    if (this.state.display === false) {
      return null;
    }
    return (
      <img
        src={this.props.src}
        alt=""
        height={this.props.size}
        width={this.props.size}
      />
    );
  }
}

Spinner.defaultProps = {
  src: spinner
};

Spinner.propTypes = {
  size: propTypes.number,
  delay: propTypes.number,
  src: propTypes.string
};

export default Spinner;
