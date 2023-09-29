import styled from 'styled-components';

export const CampoWrapper = styled.div`
  margin: 24px 0;
  font-family: 'Roboto', sans-serif;

  label {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
    
    
  }

  input {
    width: 100%;
    background-color: var(--color-gray-medium); 
    padding: 30px 20px;
    outline-color: #6278f7;
    font-size: 16px;
    box-sizing: border-box;
    border-radius: 4px;
    border-bottom: 2px solid var(--color-gray-medium);
    
  }

  &.campo-color input {
    height: 40px;
    padding: 5px 20px;
   
  }
`;


