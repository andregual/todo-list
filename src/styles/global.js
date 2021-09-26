import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --bright-blue: hsl(220, 98%, 61%);
    --check-background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    font-family: 'Josefin Sans', sans-serif;


    @media screen and (max-width: ${({ theme }) => theme.breakpoints.max_sm}) {
      font-size: ${({ theme }) => theme.fontSizes.sm}
    }

    @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.min_md}) and (max-width: ${({ theme }) =>
  theme.breakpoints.max_md}) {
      font-size: ${({ theme }) => theme.fontSizes.md}
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.min_lg}) {
      font-size: ${({ theme }) => theme.fontSizes.md}
    }
  }
`;
