import { createGlobalStyle } from "styled-components";
import media from "./media";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    overflow-x: hidden;
    height: 100%;
    font-family: 'Lato', sans-serif;

    color: ${theme.dark};
    font-size: 62.5%;
    ${media.tablet` font-size: 52.5%; `}
    ${media.mobile` font-size: 48.5%; `}
  }

  .ol-zoom.ol-unselectable.ol-control, .ol-attribution.ol-unselectable.ol-control.ol-uncollapsible{
    display: none;
  }
  .react-datepicker-wrapper, .react-datepicker__input-container
  {
    width: 100%;
  }
  .react-datepicker__header {
    border-top-left-radius: 0.48rem !important;
    border-top-right-radius: 0.48rem !important;
    padding-top: 0.5rem !important;
  }
  
  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name{  
    width: 2.72rem !important;
    line-height: 2.72rem !important;
    margin: 0.2656rem !important;
  }

  .react-datepicker{
    font-size: 1.28rem !important;
  }
  
  .react-datepicker__current-month{
    font-size: 1.5104rem !important;
  }
  .react-datepicker-popper
  {
    width: max-content;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    height: fit-content !important;
    height: -moz-fit-content !important;
  }

`;

export default GlobalStyle;
