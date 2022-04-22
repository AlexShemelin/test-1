import i18n from "i18next";
import { initReactI18next } from "react-i18next";

 /* здесь всё из quick-start гайда по ссылке:
* https://react.i18next.com/guides/quick-start
 */


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  ru: {
    translation: {
      "Loading.First": "Виджет крузится",
      "Loading.Second": "Виджет ещё грузится",
      "Loading.Third": "Загрузка идёт дольше чем обычно. Пожалуйста, подождите",
      "Error.Timeout": "Ошибка при загрузке. Пожалуйста -- обновите окно",
      "Success.LoadingFinished": "Виджет загружен!",
    },
  },
  en: {
    translation: {
      "Loading.First": "Widget is spinning",
      "Loading.Second": "Widget is still loading",
      "Loading.Third": "Loading is taking longer than usual. Please wait",
      "Error.Timeout": "Error loading. Please refresh the window",
      "Success.LoadingFinished": "Widget loaded!",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
