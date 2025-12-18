import { useContext } from "react";
import { AuthContext } from "../../Context Provider/CreateContext";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import UserProfileButton from "./UserProfileButton";
import { NavLink } from "react-router-dom";

function UserProfile() {
  const { currentUser } = useContext(AuthContext);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  if (!currentUser) {
    return (
      <>
        {isMdUp ? (
          <NavLink to="/login">
            <IconButton sx={{ backgroundColor: "text.disabled" }}>
              <PersonOutlineOutlinedIcon sx={{ color: "text.primary", p: 0 }} />
            </IconButton>
          </NavLink>
        ) : (
          <></>
        )}
      </>
    );
  }

  return (
    <>
      <UserProfileButton />
    </>
  );
}

export default UserProfile;
