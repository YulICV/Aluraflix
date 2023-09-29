import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || 'var(--color-primary-medium)'};
  color: ${(props) => props.textColor || '#FFFFFF'};
  width: 180px;
  height: 54px;
  border: 2px solid ${(props) => props.borderColor || 'transparent'};
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  cursor:pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor || 'var(--color-gray-medium)'};
    color: ${(props) => props.hoverTextColor || '#000000'};
    border: 2px solid ${(props) => props.hoverBorderColor || 'transparent'};
  }
`;
