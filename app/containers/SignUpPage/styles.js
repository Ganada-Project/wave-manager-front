/**
 * SignUpPage styles
 */

import styled from 'styled-components';
import { Radio } from 'semantic-ui-react';

export const Container = styled.div`
  width: calc(768px + 16px * 2);
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 55px);
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 60%;
  height: 70%;
  padding: 30px 10%;
  border: 1px ${props => props.theme.pointColor} solid;
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

export const RowFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
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
  background-color: ${props =>
    props.clicked ? 'rgba(221, 104, 113, 0.5)' : 'rgba(0, 0, 0, 0.3)'};
`;

export const StyleImage = styled.img`
  border-radius: 10px;
  width: 100%;
`;

export const StyleText = styled.p`
  color: white;
  margin-bottom: 5px;
`;

export const SellRadio = styled(Radio)``;

export const MarketingRadio = styled(Radio)``;
