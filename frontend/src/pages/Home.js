// Import React and other necessary libraries
import React, {
  useState
} from "react";
import axios from "axios";

// Import Material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
const API_TOKEN = "token"
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
      // Query the API with the user input and the button value using axios
      /*async function query(data) {
          const response = await fetch(
              "api", {
                  headers: {
                      Authorization: `Bearer ${API_TOKEN}`
                  },
                  method: "post",
                  body: JSON.stringify(data),
              }
          );
          const result = await response.json();
          return result;
      }
      if (result) {
          query({
              inputs: "write an ethical arugment that is " + stance + " the following: " + question
          }).then((response) => {
              console.log(response);
              console.log(JSON.stringify(response));
              setResult(JSON.stringify(response));
          });
      }*/
      console.log('the stance: ' + stance + '\n\nthe question: ' + question);
      setResult(['the stance: ' + stance, <
          br / > ,
          'the question: ' + question
      ]);
  };
  // Return the JSX code for rendering the home page screen
  return (
    <div className="home">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EthicalGPT - Ethical AI
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
          <Alert>
            {result}
          </Alert>
        )}
      </div>
    </div>
  );
}

// Export the component
export default Home;