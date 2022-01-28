import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Footer from "Components/Common/Footer";
import Header from "Components/Common/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// '-apple-system',
// 'BlinkMacSystemFont',
// '"Segoe UI"',
// 'Roboto',
// '"Helvetica Neue"',
// 'Arial',
// 'sans-serif',
// '"Apple Color Emoji"',
// '"Segoe UI Emoji"',
// '"Segoe UI Symbol"'

const theme = createTheme({
  typography: {
    fontFamily: "Helvetica Neue",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header
        title="Cricareer - Cricket Statistics site for all leagues and ICC players"
        description="You can view batting and bowling averages for ICC, IPL, PSL, BBL, CPL, SUPER SMASH an T20 BLAST players or you can compare averages of any two players to get better insight about their career."
      />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
