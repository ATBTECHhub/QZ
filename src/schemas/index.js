import * as Yup from "yup";
export const CreatorSignupSchema = Yup.object().shape({
  name: Yup.string().min(5, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Password must be atleast 5 characters long")
    .required("Required"),
});

export const TakerSignupSchema = Yup.object().shape({
  name: Yup.string().min(5, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Password must be atleast 5 characters long")
    .required("Required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Password must be atleast 5 characters long")
    .required("Required"),
    // role: Yup.string().role("invalid").min("").required("Required")
});

export const TestTakerLoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  accesscode: Yup.string()
  .min(5, "Access code must be atleast 5 characters long")
  .required("Required"),
});