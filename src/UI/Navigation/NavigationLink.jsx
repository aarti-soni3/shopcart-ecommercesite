import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavigationLink({ to, label, primaryColor }) {
  const theme = useTheme();

  const primary = primaryColor ? primaryColor : theme.palette.text.primary;
  const navStyle = ({ isActive }) => ({
    color: isActive ? theme.palette.primary.main : primary,
  });

  return (
    <>
      <NavLink to={to} style={navStyle}>
        <Box sx={{ "&:hover": { color: theme.palette.warning.main } }}>
          {label}
        </Box>
      </NavLink>
    </>
  );
}
