import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import zIndex from "@mui/material/styles/zIndex";

export const UserAvatar = styled(Avatar)(() => ({
  width: 100,
  height: 100,
  position: "relative",
  fontSize: 60,
  backgroundColor: "#55ad55",
  color: "#144214",
  fontWeight: "bold",
  boxShadow: "7px 6px 5px 0px rgba(0,0,0,0.4)",

  "&.primary": {
    zIndex: 2,
  },

  "&.secondary": {
    zIndex: 1,
  },
}));
