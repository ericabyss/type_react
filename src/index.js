import React from "react"; 
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

//React는 virtual 돔을 사용함
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //root안에 App에 만들어지는 모든 요소들이 가상으로 삽입되어 렌더링됌
);