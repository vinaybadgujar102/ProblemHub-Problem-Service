import { Router } from "express";
import {
  addProblem,
  deleteProblem,
  getProblem,
  getProblems,
  pingProblemController,
  updateProblem,
} from "../../controllers";

const ProblemRouter = Router();

ProblemRouter.get("/ping", pingProblemController);

ProblemRouter.get("/", getProblems);

ProblemRouter.get("/:id", getProblem);

ProblemRouter.post("/", addProblem);

ProblemRouter.delete("/:id", deleteProblem);

ProblemRouter.put("/:id", updateProblem);

export default ProblemRouter;
