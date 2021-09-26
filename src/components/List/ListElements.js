import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 1rem;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const CardFooter = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0;
`;

export const UlTodo = styled.ul`
  list-style-type: none;
`;

export const LiTodo = styled.li`
  padding: 1rem;
  display: flex;
  flex-direction: row;
`;
export const TodoItem = styled.p`
  margin-inline: 1rem;
  color: ${(props) =>
    props.checked ? props.theme.colors.greyText : props.theme.colors.todoText};
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  transition: all 0.3s ease;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;
export const UlFooter = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  color: ${({ theme }) => theme.colors.greyText};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: ${(props) => (props.mobile ? '100%' : 'auto')};
  justify-content: space-around;
`;

export const LiFooter = styled.li`
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    transition: color 0.5s ease;
  }

  color: ${(props) =>
    props.active
      ? props.theme.colors.primaryBlue
      : props.theme.colors.greyText};

  margin-inline: 10px;
  cursor: pointer;
`;

export const DeleteButton = styled.span`
  margin-left: auto;
  align-self: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.greyText};
`;

export const DeleteIcon = styled.img``;

export const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.greyText};
  border-left: 1px solid ${({ theme }) => theme.colors.greyText};
  border-right: 4px solid ${({ theme }) => theme.colors.greyText};
  border-bottom: 4px solid ${({ theme }) => theme.colors.greyText};
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  margin-bottom: 0.5rem;
`;

export const DragDropText = styled.p`
  color: ${({ theme }) => theme.colors.greyText};
  text-align: center;
  margin-top: 4rem;
`;

export const ItemsLeft = styled.p`
  color: ${({ theme }) => theme.colors.greyText};
  text-align: center;
`;

export const ClearButton = styled.p`
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    transition: color 0.5s ease;
  }
  color: ${({ theme }) => theme.colors.greyText};
  cursor: pointer;
`;

export const StyledInput = styled.input`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.todoText};
  font-family: 'Josefin Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.md};
  outline: none;
  width: 100%;
  margin-left: 1rem;
  align-self: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
