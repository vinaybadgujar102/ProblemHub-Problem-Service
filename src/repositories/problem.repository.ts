import logger from "../config/logger.config";
import NotFoundError from "../errors/notFound.error";
import Problem from "../models/problem.model";

export default class ProblemRepository {
  async createProblem(problemData: any) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id: string) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFoundError("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id: string) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(id);
      if (!deletedProblem) {
        throw new NotFoundError("Problem", id);
      }
      logger.info("Problem deleted successfully");
      return deletedProblem;
    } catch (error) {
      logger.warn(error);
      throw error;
    }
  }
}
