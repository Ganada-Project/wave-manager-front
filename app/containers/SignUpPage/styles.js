/**
 * HomePage styles
 */

import styled from 'styled-components';

export const Container = styled.div`
  width: calc(768px + 16px * 2);
  height: 100%;
  background-color: whitesmoke;
`;

export const Content = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 55px);
  background-color: skyblue;
`;

export const Row = styled.div`
  display: flex;
  display: -webkit-flex;
  flex: 1;
  height: 100%;
  border: 1px green solid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  color: ${props => props.theme.textColor};
`;
