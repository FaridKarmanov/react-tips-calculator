import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./components/UI/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
