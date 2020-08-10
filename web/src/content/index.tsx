import React from 'react';
import styled from 'styled-components';
import { Theme } from '../colors';

const Wrapper = styled.div<Theme>`
  color: ${props => props.Foreground};
  background: ${props => props.Background};
  `
const BannerSection = styled.section`
  height: 100vh;
  overflow: hidden;
  background-image: url(img/bg-1.jpg);
  filter: brightness(50%);
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  `
export interface ContentProps {
  Theme: Theme
}
class Content extends React.Component<ContentProps,any> {
  render() {
      // Anthony Poschen Portfolio
      // show the github, gitlab
      // link to some cool projects
      // maybe i should make my game engine run in the browser
    
    return (
      <Wrapper {...this.props.Theme}>
        <BannerSection id="banner">
        Anthony Poschen
          Github: ->
          Gitlab: ->
          LinkedIn: ->
          some other shit?
          maybe just cool projects?
        </BannerSection>

      </Wrapper>
    )
  }
}
export default Content;
