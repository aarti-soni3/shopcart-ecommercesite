import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_avao6re", "template_9c7vprc", form.current, {
        publicKey: "9sMU_X8g0XnOI3-No",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Paper
      elevation={3}
      sx={{ width: { xs: 280, sm: 400, md: 450, lg: 500, xl: 550 } }}
    >
      <form ref={form} onSubmit={sendEmail}>
        <Stack direction={"column"} gap={2} sx={{ m: 2, p: 2 }}>
          <Typography fontWeight={800} variant="h3">
            {" "}
            Send Us Message{" "}
          </Typography>
          <TextField
            type="text"
            label="Name"
            name="user_name"
            placeholder="Name"
            required
          />
          <TextField
            type="email"
            label="Email"
            name="user_email"
            placeholder="Email"
            required
          />

          <TextField
            type="tel"
            label="Phone"
            name="phone"
            placeholder="Phone"
            required
          />

          <TextField
            type="text"
            label="Message"
            name="message"
            multiline={true}
            rows={3}
            placeholder="Message"
            required
          />
          <Button variant="contained" type="submit">
            Send Message
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};
