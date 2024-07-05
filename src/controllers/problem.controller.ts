import { Request, Response } from "express";

export function pingProblemController(req: Request, res: Response) {
  res.send({
    message: "Problem Controller is up and running",
  });
}

export function addProblem(req: Request, res: Response) {}

export function getProblem(req: Request, res: Response) {}

export function getProblems(req: Request, res: Response) {}

export function deleteProblem(req: Request, res: Response) {}

export function updateProblem(req: Request, res: Response) {}
