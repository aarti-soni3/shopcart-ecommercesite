import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useContext, useState } from "react";
import CartSummary from "./Cart/CartSummary";
import { CartContext, OrderContext } from "../Context Provider/CreateContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidationSchema } from "../utils/validationSchema";
import { useNavigate } from "react-router-dom";
import RazorpayButton from "./RazorpayButton";

export default function PlaceOrderPage() {
  const { cart, loading, error, clearUserCart } = useContext(CartContext);
  const { createOrder } = useContext(OrderContext);
  const [submitError, setSubmitError] = useState(null);

  const initialData = {
    fullName: "",
    email: "",
    phone: "",
    address: {
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
    paymentMethod: "",
  };

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: initialData,
    mode: "onBlur",
  });

  const navigate = useNavigate();
  const selectedPaymentMethod = watch("paymentMethod");
  console.log(selectedPaymentMethod);

  const processOrder = useCallback(
    async (orderData) => {
      try {
        setSubmitError(null);
        await createOrder(orderData);
        await clearUserCart();
        await reset();
      } catch (error) {
        setSubmitError(error);
        console.log(
          error.message || "Failed to place order. Please try again."
        );
      }
    },
    [createOrder, clearUserCart, reset]
  );

  const onSubmit = async (orderData) => {
    try {
      await processOrder(orderData);
      navigate("/ordersuccess");
    } catch (error) {
      setSubmitError(error);
      console.log("COD Submission Failed", error);
      navigate("/orderfailed");
      throw error;
    }
  };

  const handlePaymentSuccess = async (paymentDetails) => {
    const paymentId = paymentDetails.paymentId;

    const orderData = getValues();
    const finalorderData = {
      ...orderData,
      paymentId: paymentId,
    };
    console.log(finalorderData);

    try {
      await processOrder(finalorderData);
      navigate("/ordersuccess");
    } catch (error) {
      console.log("Razor Pay Payment Failed", error);
      navigate("/orderfailed");
      throw error;
    }
  };

  const handlePaymentError = (errorData) => {
    console.log(errorData.error);
    setSubmitError("Payment Failed, Try again...");
    navigate("/orderfailed");
  };

  if (loading) {
    return <>Loading...</>;
  }

  if (!cart) {
    return <> Cart is Empty....</>;
  }

  if (error) {
    return <>Something Went Wrong... {console.log(error)}</>;
  }

  return (
    <>
      {isSubmitSuccessful && !submitError && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Order placed successfully! Your cart has been cleared.
        </Alert>
      )}

      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={"row"} gap={20} sx={{ mt: 10 }}>
          <Box>
            <Typography variant="h4"> Delivery Information</Typography>
            <br />
            <Stack direction={"row"} gap={6}>
              <Stack>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Full Name"
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                      required
                    />
                  )}
                />

                <br />
                <br />

                <Controller
                  name="address.address"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Address"
                      error={!!errors.address?.address}
                      helperText={errors.address?.address?.message}
                      required
                      // multiline
                      // row={2}
                    />
                  )}
                />
                <br />
                <br />

                <Controller
                  name="address.city"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="City"
                      error={!!errors.address?.city}
                      helperText={errors.address?.city?.message}
                      required
                    />
                  )}
                />

                <br />
                <br />
                <Controller
                  name="address.country"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Country"
                      error={!!errors.address?.country}
                      helperText={errors.address?.country?.message}
                      required
                    />
                  )}
                />
                <br />
                <br />
              </Stack>
              <Stack>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="email"
                      label="Email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      required
                    />
                  )}
                />
                <br />
                <br />

                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="tel"
                      label="Phone"
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      required
                    />
                  )}
                />
                <br />
                <br />

                <Controller
                  name="address.state"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="State"
                      error={!!errors.address?.state}
                      helperText={errors.address?.state?.message}
                      required
                    />
                  )}
                />
                <br />
                <br />

                <Controller
                  name="address.postalCode"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Postal Code"
                      error={!!errors.address?.postalCode}
                      helperText={errors.address?.postalCode?.message}
                      required
                    />
                  )}
                />
              </Stack>
            </Stack>
          </Box>
          <Stack gap={5}>
            <CartSummary discountedTotal={cart.discountedTotal} />

            <Box>
              <FormControl required error={!!errors.paymentMethod}>
                <Typography variant="h6">Payment Method</Typography>

                <Controller
                  name="paymentMethod"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field} row>
                      <FormControlLabel
                        // name="stripe"
                        value="Razorpay"
                        control={<Radio />}
                        label="Razorpay"
                      />
                      <FormControlLabel
                        // name="cod"
                        value="COD"
                        control={<Radio />}
                        label="Cash On Delivery"
                      />
                    </RadioGroup>
                  )}
                />

                {errors.paymentMethod && (
                  <FormHelperText sx={{ color: "red" }}>
                    {errors.paymentMethod.message}
                  </FormHelperText>
                )}
              </FormControl>
              <br />
              <br />
              {selectedPaymentMethod === "COD" && (
                <Button
                  type="submit"
                  variant="contained"
                  //   onClick={handleOnSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Placing Order" : "Place Order"}
                </Button>
              )}

              {selectedPaymentMethod === "Razorpay" && (
                <RazorpayButton
                  amount={cart.discountedTotal}
                  userDetails={{
                    name: getValues("fullName"),
                    email: getValues("email"),
                    phone: getValues("phone"),
                  }}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                  disabled={isSubmitting || !isValid}
                />
              )}
            </Box>
          </Stack>
        </Stack>
      </form>
    </>
  );
}
