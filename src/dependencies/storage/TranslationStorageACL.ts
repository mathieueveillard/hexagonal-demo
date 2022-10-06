import { TranslationStorage } from "../../domain/dependencies";
import { Language, Translation, OtherLanguage } from "../../domain/types";
import LocalStorage from "./LocalStorage";

export default class TranslationStorageACL<N extends Language>
  implements TranslationStorage<N>
{
  localStorage: LocalStorage<Translation<N>>;

  constructor() {
    this.localStorage = new LocalStorage("TRANSLATIONS");
  }

  getAllTranslationsForForeignLanguage = async (
    language: OtherLanguage<N>
  ): Promise<Translation<N>[]> => {
    const allTranslations = await Promise.resolve(
      this.localStorage.getAllItems()
    );
    return allTranslations.filter(
      ({ foreign }) => foreign.language === language
    );
  };

  saveTranslation = (translation: Translation<N>): Promise<void> => {
    this.localStorage.insertItem(translation);
    return Promise.resolve();
  };
}
