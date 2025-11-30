import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../Context Provider/CreateContext";
import { NavLink } from "react-router-dom";

function LoginPage() {
  const { LoginUserWithEmailAndPassword, loginData } = useContext(AuthContext);

  const initialData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleOnSubmit = () => {
    LoginUserWithEmailAndPassword(formData?.email, formData?.password);
  };

  const handleOnValueChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <Typography variant="h4"> Login Page</Typography>
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
        disabled={loginData.isLoginLoading}
      >
        {loginData.isLoginLoading ? "Loggin in..." : "Login"}
      </Button>

      {loginData.isLoginError && (
        <Box
          sx={{
            color: "white",
            backgroundColor: "gray",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <Typography fontWeight={600}>Login Failed:</Typography>
          <Typography>{loginData.loginErrorMessage}</Typography>
        </Box>
      )}
      <Box>
        New User ?{" "}
        <NavLink to="/signup">
          <Typography sx={{ textDecoration: "underline" }}>Sign Up</Typography>
        </NavLink>
      </Box>
    </>
  );
}

export default LoginPage;
