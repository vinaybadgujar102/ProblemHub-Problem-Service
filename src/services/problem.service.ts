import ProblemRepository from "../repositories/problem.repository";
import sanitizieMarkdownContent from "../utils/markdownSanitizer";

export default class ProblemService {
  public problemReposity: any;

  constructor(problemReposity: any) {
    this.problemReposity = problemReposity;
  }

  async createProblem(problemData: any) {
    // 1. Sanitize the markdown for description
    problemData.description = await sanitizieMarkdownContent(
      problemData.description
    );
    const problem = await this.problemReposity.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemReposity.getAllProblems();
    return problems;
  }
}
