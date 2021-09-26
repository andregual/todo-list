import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${(props) => props.theme.backgroundImage});
  background-size: cover;
  width: 100%;
  height: 33vh;
  position: absolute;
  z-index: -1;
`;
