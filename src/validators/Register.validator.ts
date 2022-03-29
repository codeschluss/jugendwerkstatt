import Joi from "joi";

export const RegisterSchema: Joi.ObjectSchema = Joi.object({
  name: Joi.string().required().trim().label("Email").messages({
    "string.empty": "Name should not be empty",
  }),
  email: Joi.string()
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
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
    .min(8)
    .label("password")
    .messages({
      "string.empty": "Password should not be empty",
      // "string.min": "Password should not be empty",
    }),
  repeatPassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .label("Confirm Password")
    .messages({
      "any.only": "Confirm Password must be the same as Password",
    }),
});
