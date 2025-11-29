import { Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { FirebaseContext } from "../Context Provider/CreateContext";

function SignUpPage() {
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthdate: "",
    age: "",
  };

  const [formData, setFormData] = useState(initialData);

  const { LoginUserWithEmailAndPassword } = useContext(FirebaseContext);

  const handleOnSubmit = () => {
    LoginUserWithEmailAndPassword(formData?.email, formData?.password);
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
      {/* <form onSubmit={handleOnSubmit}> */}
      <Typography variant="h4"> Signup Page</Typography>
      <br />

      <TextField
        type="input"
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleOnValueChange}
        required
      ></TextField>
      <br />
      <br />

      <TextField
        type="input"
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleOnValueChange}
        required
      ></TextField>
      <br />
      <br />

      <TextField
        type="number"
        label="Age"
        name="age"
        value={formData.age}
        onChange={handleOnValueChange}
        required
      ></TextField>
      <br />
      <br />

      <TextField
        type="date"
        label="Birth Date"
        name="birthdate"
        value={formData.birthdate}
        onChange={handleOnValueChange}
        required
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

      <Button type="submit" onClick={handleOnSubmit}>
        Submit
      </Button>
      {/* </form> */}
    </>
  );
}

export default SignUpPage;
