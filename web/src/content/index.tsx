import React from 'react';
import styled from 'styled-components';
import { Theme } from '../colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin , faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'


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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  top: 25%;
  height: 30%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: left;
 
  #Name {
    color: ${props => props.Foreground}; 
    font-size: 7.6vmin;
    text-transform: uppercase;
    outline: ${props => props.Background} thick;
  };

  #Links {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
  #Links a {
    padding-left: 5px;
    padding-right: 5px;
    text-decoration: unset;
    color: inherit;
    display: inline-block; 
  };

  `
export interface ContentProps {
  Theme: Theme
}
class Content extends React.Component<ContentProps,any> {
  render() {

    return (
      <Wrapper {...this.props.Theme}>
        <BannerSection id="banner" {...this.props.Theme}>
          <BackgroundImage Image="img/bg-1.jpg"/> 
          <BannerContentWrapper {...this.props.Theme}>
            <div id="Name">
               Anthony Poschen 
            </div>
            <div id="Links">
              <a href="https://www.linkedin.com/in/anthony-poschen-83580520/">
                <FontAwesomeIcon  icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/zanven42">
                <FontAwesomeIcon  icon={faGithub} size="2x" />
              </a>
              <a href="https://gitlab.com/zanven">
                <FontAwesomeIcon icon={faGitlab} size="2x" />
              </a>
            </div>
          </BannerContentWrapper>
        </BannerSection>

      </Wrapper>
    )
  }
}
export default Content;
