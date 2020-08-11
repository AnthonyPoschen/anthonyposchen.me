import React from 'react';
import styled from 'styled-components';
import { Theme } from '../colors';

const Wrapper = styled.div<Theme>`
  color: ${props => props.Foreground};
  background: ${props => props.Background};
  `
const BannerSection = styled.section<Theme>`
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;

  `
  interface IBackgroundImage {
    Image: string
  }
const BackgroundImage = styled.div<IBackgroundImage>`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url(${props => props.Image});
  filter: brightness(50%);
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;

  `
const BannerContentWrapper = styled.div<Theme>`
  display: inline-block;
  width: 90%;
  top: 25%;
  height: 30%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  backdrop-filter: blur(2px);
  text-align: left;
 
  #Name {
    width: 40%;
    margin-right: auto;
    margin-left: 0;
  }
  #Name span{
    display: inline-block;
    color: ${props => props.Foreground}; 
    font-size: 7.6vmin;
    text-transform: uppercase;
    outline: ${props => props.Background} thick;
  };

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
        <BannerSection id="banner" {...this.props.Theme}>
          <BackgroundImage Image="img/bg-1.jpg"/> 
          <BannerContentWrapper {...this.props.Theme}>
            <div id="Name">
              <span> 
               Anthony 
              </span>
              <span>
               Poschen 
              </span>
            </div>
          </BannerContentWrapper>
        </BannerSection>

      </Wrapper>
    )
  }
}
export default Content;
