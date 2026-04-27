import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { searchCompanies } from "./api";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

console.log(searchCompanies("TSLA"));
root.render(<App />);

reportWebVitals();
