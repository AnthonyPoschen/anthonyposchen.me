import React from 'react';
import { useMediaQuery } from 'react-responsive'
import styled,{keyframes} from 'styled-components';
import { Theme, Light, Dark } from './colors';
import Content from './content'

// const spin = keyframes`
// from {
//   transform: rotate(0deg);
// }
// to {
//   transform: rotate(360deg);
// }
// `

interface AppProps {
  Mobile: boolean
  Theme: Theme
}
const App = styled.div<AppProps>`
  background: ${props => props.Theme.Background};
  text-align: center;
  // min-height: 100vh;
`
// const Header = styled.div`
//   grid-area: header;
//   background: red;
//
//   p {
//     animation: ${spin} infinite 2s linear;
//   }
// `

// const app = styled.var
function AppComponent() {
  const isMobile:boolean = useMediaQuery({ maxWidth: 1199 })
  const DarkMode:boolean = useMediaQuery({query: '(prefers-color-scheme: dark)'})
  const ActiveTheme = DarkMode ? Dark: Light
  return (
    <App Mobile={isMobile} Theme={ActiveTheme}>
      <Content Theme={ActiveTheme}/>
    </App>
  );
}


export default AppComponent;
