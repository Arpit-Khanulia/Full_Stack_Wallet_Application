import * as yup from 'yup'



export const validationSchema = yup.object().shape({
  name: yup.string().required().min(2),
  username: yup.string().required().min(2),
  email: yup.string().email().required(),
  password: yup.string().required("Password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long"),
  confirmpassword: yup.string().oneOf([yup.ref('password'), ''], 'Passwords must match').required(),
});

export const validationloginSchema = yup.object().shape({

  username: yup.string().required().min(2),
  email: yup.string().email().required(),
  password: yup.string().required("Password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long"),

});
export const paymentSchema = yup.object().shape({

  recipent_username: yup.string().required("username is required").min(2),
  transfer_money: yup.number().required("amount is required").moreThan(0, "amount must be greater than 0"),
  password: yup.string().required("Password is required")
});
export const viewBalanceSchema = yup.object().shape({
  password: yup.string().required("Password is required")
});

