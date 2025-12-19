import { useContext } from "react";
import { AuthContext } from "../../Context Provider/CreateContext";
import { Box, Paper, Stack, Typography } from "@mui/material";

export default function ProfilePage() {
  const { currentUserData } = useContext(AuthContext);

  if (!currentUserData) return <> No Data Available</>;

  return (
    <>
      <Paper
        elevation={4}
        sx={{ m: "100px 8px", p: 2, width: 300, justifySelf: "center" }}
      >
        <Typography fontWeight={700} fontSize={20}>
          My Profile{" "}
        </Typography>
        <Stack gap={2} sx={{ mt: 4 }}>
          {Object.entries(currentUserData).map(([key, value]) => {
            if (key === "password") return;

            return (
              <Stack
                key={key}
                direction={"row"}
                justifyContent={"space-evenly"}
                textAlign={"left"}
                gap={2}
              >
                <Stack flexGrow={0}>
                  <Typography fontWeight={600}>{key}</Typography>
                </Stack>
                <Stack flexGrow={1}>
                  <Typography>{value}</Typography>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Paper>
    </>
  );
}
