import { useContext } from "react";
import { AuthContext } from "../../Context Provider/CreateContext";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { IconButton } from "@mui/material";
import UserProfileButton from "./UserProfileButton";
import { NavLink } from "react-router-dom";

function UserProfile() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return (
      <>
        <NavLink to="/login">
          <IconButton>
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </NavLink>
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
