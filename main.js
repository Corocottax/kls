import {
  ChangeLanguage,
  ChangeLanguageListeners,
} from "./src/components/ChangeLanguage/ChangeLanguage";
import { Email } from "./src/components/Email/Email";
import { Header } from "./src/components/Header/Header";
import { Main } from "./src/components/Main/Main";
import { Waves } from "./src/components/Waves/Waves";
import "./style.css";

export const init = () => {
  document.body.innerHTML = "<div id='app'></div>";

  Waves();
  Header();
  Main();
  Email();
  ChangeLanguage();
  ChangeLanguageListeners();
};

init();
