import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import NotImplementedError from "../errors/notImplemented.error";

export function pingProblemController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    throw new NotImplementedError("pingProblemController");
  } catch (error) {
    next(error);
  }
}

export function addProblem(req: Request, res: Response, next: NextFunction) {
  try {
    throw new NotImplementedError("addProblem");
  } catch (error) {
    next(error);
  }
}

export function getProblem(req: Request, res: Response, next: NextFunction) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

export function getProblems(req: Request, res: Response, next: NextFunction) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

export function deleteProblem(req: Request, res: Response, next: NextFunction) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

export function updateProblem(req: Request, res: Response, next: NextFunction) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}
