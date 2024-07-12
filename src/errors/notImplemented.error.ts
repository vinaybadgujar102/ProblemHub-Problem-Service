import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class NotImplementedError extends BaseError {
  constructor(methodName: string) {
    super(
      "NotImplementedError",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} is not implemented`,
      {}
    );
  }
}

export default NotImplementedError;
