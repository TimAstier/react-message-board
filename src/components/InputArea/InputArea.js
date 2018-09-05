import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ChildComponents from './components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

class InputArea extends React.Component {

  renderChildComponent() {
    switch(this.props.status) {
      case 'initial': return <ChildComponents.Initial />;
      case 'new':
        return (
          <ChildComponents.New
            charactersCountLabel={this.props.charactersCountLabel}
          />
        );
      case 'edit':
        return (
          <ChildComponents.Edit />
        );
      case 'saving': return <ChildComponents.Saving />;
      default: return null;
    }
  }
  
  render() {
    return (
      <Wrapper>
        {this.renderChildComponent()}
      </Wrapper>
    );
  }
}

InputArea.propTypes = {
  status: PropTypes.oneOf([
    'initial',
    'new',
    'edit',
    'saving'
  ]).isRequired,
  charactersCountLabel: PropTypes.string.isRequired,
};

export default InputArea;
