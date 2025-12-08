import * as yup from "yup";

export const formValidationSchema = yup
  .object({
    fullName: yup
      .string()
      .required("Full name is required")
      .min(3, "Name must be at least 3 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits"),
    address: yup.object({
      address: yup.string().required("Address is required"),
      city: yup.string().required("City is required"),
      state: yup.string().required("State is required"),
      country: yup.string().required("Country is required"),
      postalCode: yup
        .string()
        .required("Postal code is required")
        .matches(/^[0-9]{6}$/, "Postal code must be 6 digits"),
    }),
    paymentMethod: yup
      .string()
      .required("Please select a payment method")
      .oneOf(["Razorpay", "COD"], "Invalid payment method"),
  })
  .required();
