import spanishJson from "./spanish.json";
import englandJson from "./england.json";
import germanJson from "./german.json";

const selectLanguage = {
    "es": spanishJson,
    "en": englandJson,
    "de": germanJson
}

export let language = selectLanguage[navigator.language] || spanishJson;

export const changeLanguage = (code) => {
    language = selectLanguage[code];
}