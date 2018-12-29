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
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;

export const Row = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 70%;
  height: 70%;
  padding: 30px 10%;
  border: 1px green solid;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const RowFooter = styled.div`
  background-color: goldenrod;
`;

export const MainTitle = styled.h1`
  color: ${props => props.theme.textColor};
`;

export const RowBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyleBox = styled.div`
  position: relative;
  width: calc(100% / 4.5);
  height: calc(100% / 4.5);
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;
  :nth-child(4n + 4) {
    margin-right: 0;
  }
`;

export const StyleOverlay = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const StyleImage = styled.img`
  border-radius: 10px;
  width: 100%;
`;

export const StyleText = styled.p`
  color: white;
  margin-bottom: 5px;
`;