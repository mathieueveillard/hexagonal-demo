import React from "react";
import { dependencies } from "../../..";
import { translationApi, ProtoTranslation } from "../../../domain";

export default function Component(): React.ReactElement {
  const [nativeWord, setNativeWord] = React.useState("");

  const [foreignWord, setForeignWord] = React.useState("");

  const canSubmit = nativeWord && foreignWord;

  function onNativeWordChange(
    event: React.SyntheticEvent<HTMLInputElement>
  ): void {
    setNativeWord(event.currentTarget.value);
  }

  function onForeignWordChange(
    event: React.SyntheticEvent<HTMLInputElement>
  ): void {
    setForeignWord(event.currentTarget.value);
  }

  async function submit(): Promise<void> {
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
      await translationApi.addTranslation(dependencies)(protoTranslation);
    }
  }

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
}
