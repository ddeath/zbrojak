import { Box } from "@mui/material";

import BgImage from "../background.jpeg";

export const TestingPage = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundImage: `url(${BgImage})`,
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          backgroundSize: "cover",
          boxShadow: "inset 0em -2em 2em #0d1615",
          paddingTop: "6em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        ></Box>
      </Box>
    </>
  );
};
