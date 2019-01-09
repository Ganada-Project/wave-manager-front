import styled from 'styled-components';

export const PhotoUploadButton = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 250px;
  border: 1px ${props => props.theme.pointColor} solid;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    div {
      opacity: 1;
    }
    p {
      opacity: 0.2;
    }
  }
`;

export const Overlay = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;
