// Import React and other necessary libraries
import React, { useState } from "react";
import axios from "axios";

// Import Material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

// Define a custom component for the home page screen
function Home() {
  // Use state hooks to store the user input and the result
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");

  // Define a function to handle the user input change
  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  // Define a function to handle the button click
  const handleClick = (event) => {
    // Get the button value
    const stance = event.target.value;

    // Send a request to an API that can answer ethical questions
    axios
      .get("https://ethical-questions-api.com/answer", {
        params: {
          question: question,
          stance: stance,
        },
      })
      .then((response) => {
        // Set the result state with the response data
        setResult(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  // Return the JSX code for rendering the home page screen
  return (
    <div className="home">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Organization Name
          </Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/about">
            About Us
          </Button>
          <Button color="inherit" href="/how-to-use">
            How to Use
          </Button>
        </Toolbar>
      </AppBar>
      <div className="input-box">
        <TextField
          id="question"
          name="question"
          label="Type in an ethical question"
          variant="outlined"
          fullWidth
          value={question}
          onChange={handleChange}
        />
      </div>
      <div className="button-choices">
        <Button variant="contained" color="primary" value="for" onClick={handleClick}>
          For
        </Button>
        <Button variant="contained" color="secondary" value="against" onClick={handleClick}>
          Against
        </Button>
        <Button variant="contained" color="primary" value="neutral" onClick={handleClick}>
          Neutral
        </Button>
      </div>
      <div className="result">
        {result && (
          <Alert severity={result.severity}>
            The answer to your question is: {result.answer}. The reasoning is:
            {result.reasoning}.
          </Alert>
        )}
      </div>
    </div>
  );
}

// Export the component
export default Home;