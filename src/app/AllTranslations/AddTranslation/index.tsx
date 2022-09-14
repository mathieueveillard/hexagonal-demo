import React from "react";
import { domain } from "../../..";
import { ProtoTranslation } from "../../../domain";

const Component = (): React.ReactElement => {
  const [nativeWord, setNativeWord] = React.useState("");

  const [foreignWord, setForeignWord] = React.useState("");

  const canSubmit = nativeWord && foreignWord;

  const onNativeWordChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    setNativeWord(event.currentTarget.value);
  };

  const onForeignWordChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    setForeignWord(event.currentTarget.value);
  };

  const submit = async (): Promise<void> => {
    if (canSubmit) {
      const protoTranslation: ProtoTranslation<"EN"> = {
        native: {
          language: "EN",
          value: nativeWord,
        },
        foreign: {
          language: "FR",
          value: foreignWord,
        },
      };
      await domain.addTranslation(protoTranslation);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>English</th>
          <th>French</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" onChange={onNativeWordChange} />
          </td>
          <td>
            <input type="text" onChange={onForeignWordChange} />
          </td>
          <td>
            <button disabled={!canSubmit} onClick={submit}>
              Add translation
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Component;
