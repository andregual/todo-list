import { useState, useCallback } from 'react';
import Banner from './components/Banner';
import GlobalStyle from './styles/global';
import styled, { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <GlobalWrapper>
        <Banner className='list' />
        <ContentWrapper className='list'>
          <Header toggleTheme={toggleTheme} themeTitle={theme.title} />
          <List />
        </ContentWrapper>
      </GlobalWrapper>
    </ThemeProvider>
  );
}

export default App;

export const ContentWrapper = styled.section`
  position: relative;
  top: 10vh;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.max_sm}) {
    margin: 0 5%;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.min_md}) and (max-width: ${({ theme }) =>
      theme.breakpoints.max_md}) {
    margin: 0 20%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.min_lg}) {
    margin: 0 20%;
  }
`;

export const GlobalWrapper = styled.div`
  position: relative;
`;
