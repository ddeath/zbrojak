import React from "react";
import { NavBar } from "./Components/NavBar";
import "./App.css";
import { Box, Button } from "@mui/material";

import PripravaButton from "./button.svg";

function App() {
  return (
    <div className="root-container">
      <NavBar />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          marginTop: "5em",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <img
            src={PripravaButton}
            alt="logo"
            style={{ width: "90vw", maxWidth: "500px" }}
          />
        </Box>
        <Button
          sx={{
            backgroundColor: "#ff6000",
            fontWeight: "bold",
            marginTop: "2em",
            color: "#ffffff",
            padding: "0.5em 2em",
          }}
        >
          Začať
        </Button>
      </Box>
    </div>
  );
}

export default App;
