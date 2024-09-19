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

<<<<<<< HEAD
export const WaitlistSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});
=======
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
  test: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  instruction: Yup.string().required("Required"),
});

>>>>>>> 5f444e9a87a479487467345493392aa0c8061433
