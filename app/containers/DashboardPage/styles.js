/**
 * HomePage styles
 */

import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 250px); // LeftNavigation Width
  margin-left: 250px;
  height: 100%;
  background-color: whitesmoke;
`;

export const Content = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 55px);
  background-color: skyblue;
`;

export const Col = styled.div`
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
