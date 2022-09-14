import ReactDOM from "react-dom";
import createId from "./dependencies/createId";
import TranslationStorageACL from "./dependencies/storage/TranslationStorageACL";
import AllTranslations from "./app/AllTranslations";
import { Dependencies } from "./domain/dependencies";
import translationApi from "./domain";

const dependencies: Dependencies<"EN"> = {
  createId,
  storage: new TranslationStorageACL<"EN">(),
};

export const domain = {
  addTranslation: translationApi.addTranslation(dependencies),
  getAllTranslationsForForeignLanguage:
    translationApi.getAllTranslationsForForeignLanguage(dependencies),
};

ReactDOM.render(<AllTranslations />, document.getElementById("root"));
