import { useState, ReactNode } from 'react';
import styled, { createGlobalStyle, TDefaultTheme, ThemeProvider } from 'styled-components';
import StyledReset from 'styled-reset';

import themes from './baseTheme';


const MediaProvider = styled.div`
  ${({ theme: { variables, screens, offsets } }) => `

    --border-radius: ${variables.border.radius}px;
    --height-page: ${screens.desktop.height}vh;
    --background-color: ${variables.color};

  `}
`;

const ResetStyle = createGlobalStyle`
	${StyledReset}
	  
	html,
	body {
	  margin: 0;
	  padding: 0;
	}

	* {
	  box-sizing: border-box;
	}
`;

const StyledThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme] = useState<TDefaultTheme>(themes);

  return (
    <ThemeProvider theme={{ ...theme }}>
      <ResetStyle />
      <MediaProvider>{children}</MediaProvider>
    </ThemeProvider>
  )
};

export default StyledThemeProvider;