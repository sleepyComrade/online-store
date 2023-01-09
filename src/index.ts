import './scss/style.scss';
import  React  from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./reactapp";

const rootDiv = document.getElementById('root');
if (rootDiv === null || !(rootDiv instanceof HTMLElement)) {
  throw new Error("error");
}
const root = ReactDOM.createRoot(rootDiv);
root.render(React.createElement(App));