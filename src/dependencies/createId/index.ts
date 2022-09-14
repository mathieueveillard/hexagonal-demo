import { v4 } from "uuid";
import { IdGenerator } from "../../domain/types";

const createId: IdGenerator = v4;

export default createId;
