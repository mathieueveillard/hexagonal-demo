import {
  Language,
  OtherLanguage,
  Translation,
  TranslationStorage,
} from "../../domain";
import LocalStorage from "./LocalStorage";

export default class TranslationStorageACL<N extends Language>
  implements TranslationStorage<N>
{
  localStorage: LocalStorage<Translation<N>>;

  constructor() {
    this.localStorage = new LocalStorage("TRANSLATIONS");
  }

  async getAllTranslationsForForeignLanguage(
    language: OtherLanguage<N>
  ): Promise<Translation<N>[]> {
    const allTranslations = await Promise.resolve(
      this.localStorage.getAllItems()
    );
    return allTranslations.filter(
      ({ foreign }) => foreign.language === language
    );
  }

  saveTranslation(translation: Translation<N>): Promise<void> {
    this.localStorage.insertItem(translation);
    return Promise.resolve();
  }
}
