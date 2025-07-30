import "./style.css";
import { html, render } from "lit-html";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const App = () => html` ${Navbar()} ${Hero()} ${Footer()} `;

render(App(), document.getElementById("app")!);
