import styled from 'styled-components';

export const AuthedHeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 250px;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  width: calc(100% - 250px);
  border-bottom: 2px orange solid;
  background-color: white;
  z-index: 200;
  padding: 0.5rem 1rem;
`;
