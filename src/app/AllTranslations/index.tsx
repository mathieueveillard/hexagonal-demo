import React from "react";
import { domain } from "../..";
import { Translation } from "../../domain/types";
import AddTranslation from "./AddTranslation";
import TranslationItem from "./TranslationItem";

const Component = (): React.ReactElement => {
  const [translations, setTranslations] = React.useState<Translation<"EN">[]>(
    []
  );

  React.useEffect(() => {
    domain
      .getAllTranslationsForForeignLanguage("FR")
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
};

export default Component;
