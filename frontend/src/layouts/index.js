import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Bar = styled(
  Box,
  {},
)(({}) => ({
  position: "absolute",
  height: "30px",
  left: "0px",
  background: "#52bbca",
  borderTopRightRadius: "13px",
  borderBottomRightRadius: "13px",
  boxShadow: "-1px 5px 16px 0px #b9b8b8",
}));

export function AppLayout({ children }) {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          background: "#ddf1ef",
          padding: "10px 25px",
        }}
      >
        <Box display="flex" justifyContent={"space-between"}>
          <Box display={"flex"} alignItems={"center"} columnGap={2}>
            <Box component="img" src="/images/logo.png" height={"50px"} />
            <Typography variant="h4" color={"#565656"} fontWeight={"bold"}>
              GLIIDE.AI
            </Typography>
          </Box>
          <Box padding={1} backgroundColor="white">
            <Button
              sx={{
                color: "#52bbca",
                marginRight: "10px",
              }}
              variant="text"
            >
              Login
            </Button>
            <Button
              sx={{
                background: "#52bbca",
              }}
              variant="contained"
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </AppBar>
      <Box
        justifyContent={"center"}
        padding={3}
        minHeight={"calc(100vh - 70px)"}
        backgroundColor={"#ddf1ef"}
      >
        {children}
      </Box>
      <Bar width={"50px"} top={"40%"} />
      <Bar width={"200px"} top={"77%"} />
    </Box>
  );
}
