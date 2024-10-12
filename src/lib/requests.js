// const Request = {
//   signup: "/auths/register",
//   login: "/auths/login",

//   // instructor dashboard routes
//   createUser: "/users",
//   updateUser: (userId) => `/users/${userId}`,

//   //group management
//   createGroup: "/groups",
//   updateGroup : (groupId) => `/groups/${groupId}`,

//   // waitlist
//   waitlist: "/waitlist"


//   // TEST MANAGEMENT
//   createTest: "/tests/create",
//   updateTest: (testId) => `/tests/${testId}`,
//   createQuestion: "/tests/:testId/questions",
//   allTests: "/tests",

//   // question bank
//   allQuestions: "/questions",

//   //administer test
//   administerTest: (testId) => `/tests/administer/${testId}`,

//   // monitorTest: (testId) => `/tests/${testId}/monitor`,

//   // createQuestion: "/questions",
//   // updateQuestion: (questionId) => `/questions/${questionId}`,

// };


const Request = {
  // Auth Routes
  auth: {
    signup: "/auths/register",
    login: "/auths/login",
  },

  // User Management
  user: {
    createUser: "/users",
    updateUser: (userId) => `/users/${userId}`,
  },

  // Group Management
  group: {
    createGroup: "/groups",
    updateGroup: (groupId) => `/groups/${groupId}`,
  },

  // Waitlist
  waitlist: "/waitlist",

  // Test Management
  test: {
    createTest: "/tests/create",
    updateTest: (testId) => `/tests/${testId}`,
    administerTest: (testId) => `/tests/administer/${testId}`,
    monitorTest: (testId) => `/tests/${testId}/monitor`,
    allTests: "/tests",
  },

  // Question Management
  question: {
    createQuestion: "/tests/:testId/questions",
    allQuestions: "/questions",
    updateQuestion: (questionId) => `/questions/${questionId}`,
  },
};


export default Request;
