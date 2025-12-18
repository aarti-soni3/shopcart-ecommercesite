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
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
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
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 15,
          mb:12,
          minWidth: 280,
          maxWidth: 500,
          justifySelf: "center",
          borderRadius: 1,
        }}
      >
        <Stack gap={3}>
          <Typography variant="h3" fontWeight={700} fontSize={25}>
            {" "}
            Login Page
          </Typography>

          <TextField
            type="input"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleOnValueChange}
            required
          ></TextField>

          <TextField
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleOnValueChange}
            required
          ></TextField>

          <Button
            type="submit"
            variant="contained"
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

          <Box display={"flex"} flexDirection={"column"}>
            New User ?
            <Button
              onClick={() => {
                navigate("/signup");
              }}
              sx={{ fontWeight: 600, fontSize: 15 }}
            >
              Create Account
            </Button>
          </Box>
        </Stack>
      </Paper>
    </>
  );
}

export default LoginPage;
