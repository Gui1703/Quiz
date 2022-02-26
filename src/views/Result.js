import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";

const Result = () => {
  let results = localStorage.getItem("result");
  let myResulCorrect = localStorage.getItem("correct");
  let myResulIncorrect = localStorage.getItem("incorrect");

  let arrayCorrect = JSON.parse(myResulCorrect);
  let arrayIncorrect = JSON.parse(myResulIncorrect);
  let arrayResult = JSON.parse(results);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        marginTop: "50px",
        background: "#0072bb",
        color: "white",
        width: "95%",
        height: "100%",
        padding: "15px",
        borderRadius: "20px",
        textAlign: "left",
        boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
      }}
    >
        <Box sx={{ width: "90%", display: "flex", flexDirection: "column" }}>
        {arrayResult}
        <Box sx={{ width: "90%", display: "flex", flexDirection: "column" }}>
          <p>Correct:</p>
          {arrayCorrect.map((arrayCorrect, key) => (
            <li style={{ color: "#48ff00", margin: "10px 0 0 0" }} key={key}>
              {arrayCorrect}
            </li>
          ))}
          <p style={{ marginTop: "15px" }}>Incorrect:</p>
          {arrayIncorrect.map((arrayIncorrect, key) => (
            <li style={{ color: "yellow" }} key={key}>
              {arrayIncorrect}
            </li>
          ))}
        </Box>
        <Link to="/">
          <Box sx={{ color: "#FFFFFF", marginTop: "20px" }}>
            <HomeIcon
              sx={{
                fontSize: "35px",
                "&:hover": {
                  opacity: "0.8",
                },
                "&:active": {
                  opacity: "0.5",
                },
              }}
            />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
export default Result;
