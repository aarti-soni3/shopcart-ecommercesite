import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context Provider/CreateContext";
import { debounceFunction } from "../../utils/debounceFunction";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();

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
    debounceFunction(SignupUserWithEmailAndPassword(formData));
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
      <Paper
        elevation={3}
        sx={{
          p: {xs:4,sm:6},
          mt: 15,
          mb: 12,
          minWidth: 280,
          maxWidth: 650,
          justifySelf: "center",
          borderRadius: 1,
        }}
      >
        <Stack gap={3}>
          <Typography variant="h3" fontWeight={700} fontSize={25}>
            Signup Page
          </Typography>

          <TextField
            type="input"
            label="First Name"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleOnValueChange}
          ></TextField>

          <TextField
            type="input"
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleOnValueChange}
          ></TextField>

          <TextField
            type="number"
            label="Phone"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleOnValueChange}
          ></TextField>

          <TextField
            type="input"
            label="Email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleOnValueChange}
            required
          ></TextField>

          <TextField
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleOnValueChange}
            required
          ></TextField>

          <Button
            type="submit"
            variant="contained"
            onClick={handleOnSubmit}
            disabled={signUpData.isSignupLoading}
          >
            Sign Up
          </Button>

          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <Typography alignContent={"center"}>
              {" "}
              Already have account?{" "}
            </Typography>
            <Button
              sx={{ fontWeight: 600, fontSize: 15 }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          </Box>

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
        </Stack>
      </Paper>
    </>
  );
}
