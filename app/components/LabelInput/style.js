import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.p`
  width: 10%;
  margin-right: 10px;
  text-align: center;
`;

export const LabeledInput = styled.input`
  width: 90%;
  height: 50px;
  border-radius: 10px;
  border: 1px gray solid;
  outline: none;
  padding: 10px;
`;
