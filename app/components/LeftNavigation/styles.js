import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: yellow;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: burlywood;
`;

export const Body = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  background-color: white;
`;

export const TopSection = styled.div``;

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 1rem 2rem;
  border: 3px solid orange;
  background-color: ${props =>
    props.curUrl === props.route ? 'teal' : 'white'};
  cursor: pointer;
`;
