import styled from 'styled-components';

export const AppWrapper = styled.div`
  @import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 10px;
  }
  * {
    font-family: 'NanumSquareRound', 'Open Sans', 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
    color: ${props => props.theme.textColor};
  }
`;
