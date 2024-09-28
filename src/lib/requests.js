const Request = {
  signup: "/auths/register",
  login: "/auths/login",

  // instructor dashboard routes
  createUser: "/users",
  createGroup: "/groups",

  // createTest: "/tests/create-and-continue",
  // TEST MANAGEMENT
  createTest: "/tests/create",
  createQuestion: "/tests/:testId/questions",
  allTests: "/tests",
};
export default Request;
