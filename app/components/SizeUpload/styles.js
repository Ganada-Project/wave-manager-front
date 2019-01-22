import styled from 'styled-components';

export const SizeUploadButton = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: calc(100% / 5);
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
  transition: 0.8s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

export const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin-right: ${props => (props.index % 4 === 3 ? '0px' : '10px')};
  border: 1px ${props => props.theme.pointColor} solid;
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-top: 0;
  padding: 10px;
`;
