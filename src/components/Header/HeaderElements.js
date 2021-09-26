import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const StyledHeader = styled.h1`
  letter-spacing: 1rem;
  color: ${({theme}) => theme.colors.white}
`;

export const StyledSwitch = styled.img`
  height: 26px;
  width: 26px;
  cursor: pointer;
`;
