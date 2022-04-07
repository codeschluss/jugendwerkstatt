import Joi from "joi";
import PasswordComplexity from "joi-password-complexity";

export const RegisterSchema: Joi.ObjectSchema = Joi.object({
  fullname: Joi.string().required().trim().label("fullname").messages({
    "string.empty": "Name should not be empty",
  }),
  loginName: Joi.string()
    .email({
      tlds: { allow: false },
    })
    .required()
    .trim()
    .label("Email")
    .messages({
      "string.email": "Email should be valid",
      "string.empty": "Email should not be empty",
    }),
  // password: Joi.string()
  //   .required()
  //   .min(8)
  //   .max(30)
  //   .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
  //   .label("password")
  //   .messages({
  //     "string.empty": "Password should not be empty",
  //     "string.regex": "Password is to week",
  //     // "string.min": "Password should not be empty",
  //   }),

  password: PasswordComplexity().messages({
    "passwordComplexity.symbol":
      "Password should contain at least 1 special character",
    "passwordComplexity.numeric": "Password should contain at least 1 number",
    "passwordComplexity.uppercase":
      "Password should contain at least 1 upper-cased letter",
    "string.empty": "Password field should not be empty",
  }),
  repeatPassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .label("Confirm Password")
    .messages({
      "any.only": "Confirm Password must be the same as Password",
    }),
});
