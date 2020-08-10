import React from 'react';
import styled from 'styled-components';
import { Theme } from '../colors';

const Wrapper = styled.div<Theme>`
  grid-area: content;
  color: ${props => props.Text};
  background: blue;
`
export interface ContentProps {
  Theme: Theme
}
class Content extends React.Component<ContentProps,any> {
  render() {
    
    return (
      <Wrapper {...this.props.Theme}>
       Content 
      </Wrapper>
    )
  }
}
export default Content;
