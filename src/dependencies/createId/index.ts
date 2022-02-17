import { v4 } from "uuid"
import { IdGenerator } from "../../domain";

const createId: IdGenerator = () => v4();

export default createId;