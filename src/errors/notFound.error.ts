import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class NotFoundError extends BaseError {
  constructor(resourceName: string, resourceValue: string) {
    super(
      "NotFoundError",
      StatusCodes.NOT_FOUND,
      `The required resouce: ${resourceName} with value: ${resourceValue} is not found`,
      { resourceName, resourceValue }
    );
  }
}

export default NotFoundError;
