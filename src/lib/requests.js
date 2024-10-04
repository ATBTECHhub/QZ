const Request = {
  signup: "/auths/register",
  login: "/auths/login",

  // instructor dashboard routes
  createUser: "/users",
  updateUser: (userId) => `/users/${userId}`,

  //group management
  createGroup: "/groups",

  
  // TEST MANAGEMENT
  createTest: "/tests/create",
  updateTest: (testId) => `/tests/${testId}`,
  createQuestion: "/tests/:testId/questions",
  allTests: "/tests",
};
export default Request;
