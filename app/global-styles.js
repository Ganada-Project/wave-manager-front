import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'NanumSquareRound', 'Open Sans', 'Helvetica Neue', Helvetica,
    Arial, sans-serif !important;
    color: ${props => props.theme.textColor};

  }


  body.fontLoaded {
    font-family: 'NanumSquareRound', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif !important
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 10px;
    font-family: 'NanumSquareRound', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif !important

  }
  .ui.selection.visible.dropdown > .text:not(.default) {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.2);
  }

.ui.selection.active.dropdown {
  border-color: #dd6871 !important;
  -webkit-box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
}

.ui.selection.active.dropdown .menu {
  border-color: #dd6871 !important;
  -webkit-box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
}
  
`;

export default GlobalStyle;
