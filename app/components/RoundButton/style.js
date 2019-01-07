import styled from 'styled-components';
export const Wrapper = styled.button`
  outline: none;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => props.theme.pointColor};
  cursor: pointer;
  color: white !important;
`;
