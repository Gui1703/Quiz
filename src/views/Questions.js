import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";

export default function Questions() {
  const [questions, setQuestions] = useState([
    {
      category: "Category",
      type: "multiple",
      difficulty: "hard",
      question: "Question",
      correct_answer: "...",
      incorrect_answers: ["...", "...", "..."],
    },
  ]);

  let numberQuest = localStorage.getItem("quest");

  let arrayNumberQuest = JSON.parse(numberQuest);

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=${arrayNumberQuest}`)
      .then((response) => {
        setQuestions(response.data.results);
        console.log(response.data.results);
      });
  }, [arrayNumberQuest]);

  let answers = [];
  let questCorrect = [];
  let questIncorrect = [];
  let results = [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [incorrect, setIncorrect] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [score, setScore] = useState(0);

  answers = [
    questions[currentQuestion].correct_answer,
    ...questions[currentQuestion].incorrect_answers,
  ];
  const home = () => {
    localStorage.clear();
  };

  const handleAnswerButtonClick = (answers) => {
    const q = [
      questions[currentQuestion].correct_answer,
      ...questions[currentQuestion].incorrect_answers,
    ];
    if (answers === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
      const correto = [
        `Question ${currentQuestion + 1} : ${
          questions[currentQuestion].question
        }${q} Correct: ${answers}`,
        ...correct,
      ];
      setCorrect(correto);
    } else {
      const incorreto = [
        `Question ${currentQuestion + 1} : ${
          questions[currentQuestion].question
        } ${q} - | Response: ${answers} | Correct:${
          questions[currentQuestion].correct_answer
        }`,
        ...incorrect,
      ];
      setIncorrect(incorreto);
    }

    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

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
        width: "90%",
        height: "100%",
        padding: "15px",
        borderRadius: "20px",
        textAlign: "left",
        boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
      }}
    >
      {/* HINT: replace "false" with logic to display the 
  score when the user has answered all the questions */}
      {showScore ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              fontSize: "20px",
              width: "90%",
              height: "100%",
            }}
          >
            You scored {score} out of {questions.length}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flexWrap: "wrap",
                textAlign: "left",
                fontSize: "20px",
                width: "90%",
                height: "100%",
              }}
            >
              <p>Correct:</p>
              {correct.map((correct, key) => (
                <li
                  style={{ color: "#48ff00", margin: "15px 0 0 0" }}
                  key={key}
                >
                  {correct}
                </li>
              ))}
              <p style={{ marginTop: "15px" }}>Incorrect:</p>
              {incorrect.map((incorrect, key) => (
                <li style={{ color: "yellow", margin: "15px 0 0 0" }} key={key}>
                  {incorrect}
                </li>
              ))}
              <p style={{ display: "none" }}>
                {(results = [`You scored ${score} out of ${questions.length}`])}
                {localStorage.setItem("result", JSON.stringify(results))}
                {(questCorrect = correct)}
                {localStorage.setItem("correct", JSON.stringify(questCorrect))}
                {(questIncorrect = incorrect)}
                {localStorage.setItem(
                  "incorrect",
                  JSON.stringify(questIncorrect)
                )}
              </p>
            </Box>
            <Link to="/">
              <Box sx={{ color: "#FFFFFF", marginTop: "15px" }}>
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
        </>
      ) : (
        <>
          <Box
            sx={{ display: "flex", flexDirection: "column", fontSize: "20px" }}
          >
            <Box>
              <Link to="/" onClick={() => home()}>
                <Box sx={{ color: "#FFFFFF" }}>
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                Question {currentQuestion + 1}/
                <Box sx={{ fontSize: "20px" }}>{questions.length}</Box>
              </Box>
            </Box>

            <Box sx={{ marginTop: "10px", height: "100%" }}>
              <Box sx={{ marginBottom: "10px", fontSize: "15px" }}>
                {questions[currentQuestion].category}
              </Box>
              {questions[currentQuestion].question}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "18px",
              marginTop: "20px",
              // overflow: "hidden",
            }}
          >
            {answers.map((answers, index) => (
              <Box
                sx={{
                  marginTop: "15px",
                  display: "flex",
                  flexDirection: "column-reverse",
                  background: "transparent",
                  border: "1px solid #FFFFFF",
                  padding: "5px",
                  borderRadius: "12px",
                  alignItems: "center",
                  width: "100%",
                  cursor: "pointer",
                  boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.5)",
                  "&:hover": {
                    opacity: "0.8",
                  },
                  "&:active": {
                    opacity: "0.5",
                  },
                }}
                key={index}
                onClick={() => handleAnswerButtonClick(answers)}
              >
                {answers}
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}
