import { Request, Response } from "express";

export function pingProblemController(req: Request, res: Response) {
  return res.send({
    message: "Problem Controller is up and running",
  });
}

export function addProblem(req: Request, res: Response) {
  return res.status(501).json({
    message: "Not Implemented",
  });
}

export function getProblem(req: Request, res: Response) {
  return res.status(501).json({
    message: "Not Implemented",
  });
}

export function getProblems(req: Request, res: Response) {
  return res.status(501).json({
    message: "Not Implemented",
  });
}

export function deleteProblem(req: Request, res: Response) {
  return res.status(501).json({
    message: "Not Implemented",
  });
}

export function updateProblem(req: Request, res: Response) {
  return res.status(501).json({
    message: "Not Implemented",
  });
}
