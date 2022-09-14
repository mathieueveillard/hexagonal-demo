import React from "react";
import { Translation } from "../../../domain/types";

type Props = {
  translation: Translation<"EN">;
};

const Component = ({ translation }: Props): React.ReactElement => {
  return (
    <span>{`${translation.native.value} => ${translation.foreign.value}`}</span>
  );
};

export default Component;
