import React from "react";
import { Translation } from "../../../domain";

interface Props {
  translation: Translation<"EN">;
}

export default function Component({ translation }: Props): React.ReactElement {
  return (
    <span>{`${translation.native.value} => ${translation.foreign.value}`}</span>
  );
}
