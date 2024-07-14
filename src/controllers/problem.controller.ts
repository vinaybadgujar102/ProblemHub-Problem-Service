import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import NotImplementedError from "../errors/notImplemented.error";
import ProblemService from "../services/problem.service";
import ProblemRepository from "../repositories/problem.repository";

const problemService = new ProblemService(new ProblemRepository())

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

export async function addProblem(req: Request, res: Response, next: NextFunction) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success:true,
      message: "Problem created successfully",
      err: {},
      data: newProblem
    })
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
