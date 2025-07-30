import "./style.css";
import { html, render } from "lit-html";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { About } from "./components/about";
import { Practice } from "./components/practice";
import { Works } from "./components/work";
import { Team } from "./components/team";
import { Reviews } from "./components/reviews";
import { Contact } from "./components/contact";

const App = () => html`
  ${Navbar()} ${Hero()} ${About()} ${Practice()} ${Works()} ${Team()}
  ${Reviews()} ${Contact()} ${Footer()}
`;

render(App(), document.getElementById("app")!);
