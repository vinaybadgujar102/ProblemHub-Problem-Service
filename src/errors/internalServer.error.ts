import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class InternalServerError extends BaseError {
  constructor(details: any) {
    super(
      "InternalServerError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      details
    );
  }
}

export default InternalServerError;
