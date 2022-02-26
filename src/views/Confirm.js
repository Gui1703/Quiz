import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Image, P } from "../styles";
import Logo from "../assets/quiz.jpg";
const Confirm = () => {
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

      <P>Do you want to start the Question's ?</P>

      {/* Buttons */}
      <Stack sx={{ marginTop: "50px" }} direction="row" spacing={4}>
        {/* Button Result */}
        <Link to="/">
          <Button
            sx={{ fontSize: "20px", borderRadius: "12px" }}
            variant="outlined"
          >
            Cancel
          </Button>
        </Link>

        {/* Button Start */}
        <Link to="/questions">
          <Button
            sx={{ fontSize: "20px", borderRadius: "12px" }}
            variant="contained"
          >
            Start
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default Confirm;
