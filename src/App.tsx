import React from "react";
import { NavBar } from "./Components/NavBar";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { DefinitionsPage } from "./Pages/DefinitionsPage/DefinitionsPage";
import { Box } from "@mui/material";
import { TestingPage } from "./Pages/TestingPage/TestingPage";
import { FaqPage } from "./Pages/FaqPage/FaqPage";

const Layout = () => {
  return (
    <div className="root-container">
      <NavBar />
      <Outlet />

      <Box
        sx={{
          backgroundColor: "#1f1f1d",
          color: "#ffffff",
          height: "4em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4em",
        }}
      >
        dusan@airsoftoperations.sk
      </Box>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="definitions" element={<DefinitionsPage />} />
        <Route path="testing" element={<TestingPage />} />
        <Route path="faq" element={<FaqPage />} />

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
