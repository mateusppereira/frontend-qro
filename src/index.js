import Footer from 'components/footer';
import Header from 'components/header';
import Main from 'components/main';
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global";
import theme from "styles/theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Main />
        <Footer />
        <GlobalStyle />
      </>
    </ThemeProvider>,
  // <Provider store={store}>
  //   <ThemeProvider theme={theme}>
  //     <>
  //       <Routes />
  //       <GlobalStyle />
  //     </>
  //   </ThemeProvider>
  // </Provider>,
  document.getElementById("root")
);
