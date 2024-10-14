const Request = {
  signup: "/auths/register",
  login: "/auths/login",
  forgotPassword: "/auths/forgot-password",
  resetPassword: "/auths/reset-password",


  // instructor dashboard routes
  createUser: "/users",
  updateUser: (userId) => `/users/${userId}`,

  //group management
  createGroup: "/groups",

  // waitlist
  waitlist: "/waitlist",

  updateGroup: (groupId) => `/groups/${groupId}`,

  // TEST MANAGEMENT
  createTest: "/tests/create",
  updateTest: (testId) => `/tests/${testId}`,
  createQuestion: "/tests/:testId/questions",
  allTests: "/tests",

  // question bank
  allQuestions: "/questions",

  //administer test
  administerTest: (testId) => `/tests/administer/${testId}`,

  // monitorTest: (testId) => /tests/${testId}/monitor,

  // createQuestion: "/questions",
  // updateQuestion: (questionId) => /questions/${questionId},
};
export default Request;