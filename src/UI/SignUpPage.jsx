import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../Context Provider/CreateContext";

function SignUpPage() {
  const initialData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialData);

  const { SignupUserWithEmailAndPassword, signUpData } =
    useContext(AuthContext);

  const handleOnSubmit = () => {
    SignupUserWithEmailAndPassword(formData);
  };

  const handleOnValueChange = (event) => {
    const { name, value } = event.target;

    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <Typography variant="h4"> Signup Page</Typography>
      <br />

      <TextField
        type="input"
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleOnValueChange}
      ></TextField>
      <br />
      <br />

      <TextField
        type="input"
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleOnValueChange}
      ></TextField>
      <br />
      <br />

      <TextField
        type="number"
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleOnValueChange}
      ></TextField>
      <br />
      <br />

      <TextField
        type="input"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleOnValueChange}
        required
      ></TextField>
      <br />
      <br />

      <TextField
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleOnValueChange}
        required
      ></TextField>
      <br />
      <br />

      <Button
        type="submit"
        onClick={handleOnSubmit}
        disabled={signUpData.isSignupLoading}
      >
        Sign Up
      </Button>

      {signUpData.isSignUpError && (
        <Box
          sx={{
            color: "white",
            backgroundColor: "gray",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <Typography fontWeight={600}>Sign Up Failed:</Typography>
          <Typography>{signUpData.signUpErrorMessage}</Typography>
        </Box>
      )}
    </>
  );
}

export default SignUpPage;
