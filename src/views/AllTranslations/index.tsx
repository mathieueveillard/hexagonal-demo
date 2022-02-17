import React from "react";
import { dependencies } from "../..";
import { translationApi, Translation } from "../../domain";
import AddTranslation from "./AddTranslation";
import TranslationItem from "./TranslationItem";

export default function Component(): React.ReactElement {
  const [translations, setTranslations] = React.useState<Translation<"EN">[]>(
    []
  );

  React.useEffect(() => {
    translationApi
      .getAllTranslationsForForeignLanguage(dependencies)("FR")
      .then((translations) => setTranslations(translations));
  });

  return (
    <div>
      <section>
        <h1>Translations from English to French</h1>
        <ul>
          {translations.map((translation) => (
            <li key={translation.id}>
              <TranslationItem translation={translation} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h1>Add a new translation</h1>
        <AddTranslation />
      </section>
    </div>
  );
}
