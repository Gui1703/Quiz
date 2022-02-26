import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Image } from "../styles";

import Logo from "../assets/quiz.jpg";

function Home() {
  const [number, setNumber] = useState(1);

  const numberChange = (e) => {
    setNumber(e.target.value);
  };

  const alertInfo = () => {
    alert("Coloque alguma quantidade de pergunta.");
  };

  const quest = () => {
    localStorage.setItem("quest", number);
  };

  const alertLocalStorage = () => {
    alert("Responda as questões para ter um relatório.");
  };

  return (
    <Box
      component="span"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "70px",
      }}
    >
      <Image src={Logo} alt="logo-imagem" />

      {/* INput */}
      <Box component="form" autoComplete="off">
        <TextField
          sx={{ width: 300 }}
          type="number"
          id="standard-basic"
          label="Number of questions"
          variant="standard"
          min={1}
          onChange={numberChange}
        />
      </Box>

      {/* Buttons */}
      <Stack sx={{ marginTop: "50px" }} direction="row" spacing={4}>
        {/* Button Result */}
        {localStorage.length > 0 ? (
          <Link to="/result">
            <Button
              sx={{ fontSize: "20px", borderRadius: "12px" }}
              variant="outlined"
            >
              Result
            </Button>
          </Link>
        ) : (
          <Button
            onClick={() => alertLocalStorage()}
            sx={{ fontSize: "20px", borderRadius: "12px" }}
            variant="outlined"
          >
            Result
          </Button>
        )}

        {/* Button Start */}
        {number.length > 0 ? (
          <Link to="/confirm">
            <Button
              onClick={() => quest()}
              sx={{ fontSize: "20px", borderRadius: "12px" }}
              variant="contained"
            >
              Start
            </Button>
          </Link>
        ) : (
          <Button
            onClick={() => alertInfo()}
            sx={{ fontSize: "20px", borderRadius: "12px" }}
            variant="contained"
          >
            Start
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default Home;
