/**
 * HomePage styles
 */

import styled from 'styled-components';

export const Container = styled.div`
  width: calc(768px + 16px * 2);
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 55px);
`;

export const LeftCol = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20%;
  padding-bottom: 20%;
  padding-left: 10%;
`;

export const RightCol = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  color: ${props => props.theme.textColor};
  margin-top: 0;
  margin-bottom: 5px;
`;

export const SubTitle = styled.h3`
  color: ${props => props.theme.textSubColor};
  margin-top: 0;
  margin-bottom: 10px;
`;

export const CopyRight = styled.p`
  color: ${props => props.theme.textSubColor};
  margin-top: 0;
`;
