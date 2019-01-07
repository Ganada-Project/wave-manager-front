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
  width: 50%;
  display: flex;
  display: -webkit-flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightCol = styled.div`
  width: 50%;
  display: flex;
  display: -webkit-flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
`;

export const MainTitle = styled.h1`
  color: ${props => props.theme.textColor};
`;

export const CoverImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

export const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
