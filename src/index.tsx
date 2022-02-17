import React from "react";
import ReactDOM from "react-dom";
import createId from "./dependencies/createId";
import TranslationStorageACL from "./dependencies/storage/TranslationStorageACL";
import { Dependencies } from "./domain";
import AllTranslations from "./views/AllTranslations";

export const dependencies: Dependencies<"EN"> = {
  createId,
  storage: new TranslationStorageACL<"EN">(),
};

ReactDOM.render(<AllTranslations />, document.getElementById("root"));
