import { Box, Container } from "@mui/material";

import PripravaButton from "../../button.svg";
import BgImage from "../background.jpeg";

import "./styles.css";

export const HomePage = () => {
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
        >
          <Box sx={{ display: "flex", flex: 1 }}>
            <img
              src={PripravaButton}
              alt="logo"
              style={{ width: "90vw", maxWidth: "500px" }}
            />
          </Box>
          <Container
            maxWidth="xs"
            sx={{
              color: "#ffffff",
            }}
          >
            <p>
              Všetky potrebné informácie na získanie zbrojného preukazu sú
              priamo v zákone ktorý je dostupný aj online a zadarmo.
            </p>
            <p>
              Vačšina kníh ktoré si viete kúpiť obsahujú "kópie" týchto zákonov
              ktoré môžu byť dokonca zastaralé...
            </p>
          </Container>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          backgroundColor: "#ffffff",
        }}
      >
        <Container>
          <h1>Ako získať zbrojný preukaz</h1>
          <p>
            Pre získanie zbrojného preukazu je potrebné splniť nasledujúce
            podmienky ustanovené v{" "}
            <a href="https://www.zakonypreludi.sk/zz/2003-190">
              zákone 190/2003 §15
            </a>
            :
          </p>
          <ul>
            <li className="how-to-list-item">
              Podať písomnú žiadosť na policajnom oddelení
            </li>
            <li className="how-to-list-item">
              Byť plne spôsobilý na právne úkony
            </li>
            <li className="how-to-list-item">Dosiahnuť požadovaný vek</li>
            <li className="how-to-list-item">Byť bezúhonný a spoľahlivý</li>
            <li className="how-to-list-item">
              Byť zdravotne a psychicky spôsobilý
            </li>
            <li className="how-to-list-item">
              Preukázať odbornú spôsobilosť (skúška)
            </li>
            <li className="how-to-list-item">
              Mať miesto pobytu na území Slovenskej Republiky
            </li>
            <li className="how-to-list-item">
              Preukázať potrebu držať alebo nosiť zbraň
            </li>
          </ul>
        </Container>
      </Box>
    </>
  );
};
