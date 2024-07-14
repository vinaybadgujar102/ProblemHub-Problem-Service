import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import NotImplementedError from "../errors/notImplemented.error";
import ProblemService from "../services/problem.service";
import ProblemRepository from "../repositories/problem.repository";

const problemService = new ProblemService(new ProblemRepository());

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

export async function addProblem(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Problem created successfully",
      err: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProblem(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched problem",
      err: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProblems(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched problems",
      err: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

export function deleteProblem(req: Request, res: Response, next: NextFunction) {
  try {
    const deletedProblem = problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted problem",
      err: {},
      data: deletedProblem,
    });
  } catch (error) {
    next(error);
  }
}

export function updateProblem(req: Request, res: Response, next: NextFunction) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}
