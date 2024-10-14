import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  name: Yup.string().min(5, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Password must be atleast 5 characters long")
    .required("Required"),
});

// export const TakerSignupSchema = Yup.object().shape({
//   name: Yup.string().min(5, "Too Short!").required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string()
//     .min(5, "Password must be atleast 5 characters long")
//     .required("Required"),
// });

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Password must be atleast 5 characters long")
    .required("Required"),
  role: Yup.string()
    .required("Role is required")
    .oneOf(["testTaker", "testCreator"], "Select a valid role"),
});

export const TestTakerLoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  accesscode: Yup.string()
    .min(5, "Access code must be atleast 5 characters long")
    .required("Required"),
});

export const CreateUserSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  // lname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const ManageGroupSchema = Yup.object().shape({
  groupName: Yup.string().required("Required"),
  groupDescription: Yup.string().required("Required"),
  memberEmails: Yup.string()
    .required("Required")
    .test(
      "is-valid-emails",
      "Please enter valid email addresses separated by commas",
      (value) => {
        if (!value) return false;
        const emails = value.split(",").map((email) => email.trim());
        // Check if each email is valid and if there are at least 2 emails
        return (
          emails.length >= 2 &&
          emails.every((email) => Yup.string().email().isValidSync(email))
        );
      }
    ),
});

export const CreateTestSchema = Yup.object().shape({
  testName: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  instructions: Yup.string().required("Required"),
});

export const WaitlistSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

// Validation schema for True/False question
export const TrueFalseSchema = Yup.object().shape({
  questionText: Yup.string().required("Required"),
  questionType: Yup.string()
    .oneOf(["TrueFalse"], "Invalid type")
    .required("Required"),
  questionAnswers: Yup.array()
    .min(1, "You must select an answer")
    .required("Required"),
  points: Yup.number().min(1, "Points must be at least 1").required(),
});

// Validation schema for Multiple Choice question
export const MultipleChoiceSchema = Yup.object().shape({
  questionText: Yup.string().required("Required"),
  questionType: Yup.string()
    .oneOf(["multipleChoice"], "Invalid type")
    .required("Required"),
  questionOptions: Yup.array()
    .of(
      Yup.object({
        optionText: Yup.string().required("Option text is required"),
        isCorrect: Yup.boolean(),
      })
    )
    .min(2, "At least two options are required for multiple choice"),
  points: Yup.number().min(1, "Points must be at least 1").required(),
});

export const AdminiterTestSchema = Yup.object().shape({
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date cannot be before start date"),
  timeLimit: Yup.number().required("Time limit is required"),

  passingScore: Yup.number()
    .required("Required")
    .min(5, "Score must be at least 5")
    .max(100, "Passing score can't exceed 100"),
  randomizeQuestions: Yup.boolean().required(
    "Please select an option for randomizing questions"
  ),
  attempts: Yup.number()
    .required("Number of attempts is required")
    .min(1, "Attempts cannot be less than 1"),
});

export const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Required"),
});

// Validation schema for

/* export const CreateQuestionSchema = Yup.object().shape({
  questionText: Yup.string().required("Required"),
  questionType: Yup.string()
    .required("Required")
    .oneOf(["TrueFalse", "multipleChoice", "essay"], "Select a valid type"),
  questionOptions: Yup.array().of(
    Yup.object({
      optionText: Yup.string().required("Option text is required"),
      isCorrect: Yup.boolean(),
    })
  ),
  points: Yup.number().min(1, "Points must be at least 1").required(),
}); */

// points: Yup.string().min(1, "Points must be at least 1").required("Required"),
// points: Yup.number()
//   .typeError("Points must be a number")
//   .required("Points is required")
//   .min(1, "Points cannot be negative"),
