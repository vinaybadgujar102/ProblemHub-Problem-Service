import { Router } from "express";
import ProblemRouter from "./problems.routes";

const v1Router = Router();

v1Router.use("/problems", ProblemRouter);

export default v1Router;
