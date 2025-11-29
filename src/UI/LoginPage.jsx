import { Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { FirebaseContext } from "../Context Provider/CreateContext";

function LoginPage() {
  const { LoginUserWithEmailAndPassword } = useContext(FirebaseContext);

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
      {console.log(formData.email)}
      {console.log(formData.password)}
      {/* <form onSubmit={handleOnSubmit}> */}
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

      <Button type="submit" onClick={handleOnSubmit}>
        Submit
      </Button>
      {/* </form> */}
    </>
  );
}

export default LoginPage;
