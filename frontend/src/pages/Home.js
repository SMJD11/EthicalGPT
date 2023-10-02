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
import Popup from "../component/Popup";
import { Box } from "@mui/material";

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
      .get("OPenAPI", {
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
  const[buttonPopup, setButtonPopup] = useState(false);
  const[aboutbuttonPopup, setAboutButtonPopup] = useState(false);
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
          <Button onClick = {() => setAboutButtonPopup(true)} color="inherit" >
            About Us
          </Button>
          <Popup trigger={aboutbuttonPopup} setTrigger= {setAboutButtonPopup}>
              <h2 style={{color : 'black'}}>About Us</h2>
          </Popup>
          <Button onClick = {() => setButtonPopup(true)} color="inherit" >
            How to Use
          </Button>
          <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
              <h2 style={{color : 'black'}}>How to Use</h2>
          </Popup>
        </Toolbar>
      </AppBar>
      <Box m="2rem 10rem 2rem 10rem">
        <TextField
          id="question"
          name="question"
          label="Type in an ethical question"
          variant="outlined"
          fullWidth
          value={question}
          onChange={handleChange}
        />
      </Box>
      <Box style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", gap: "2rem", alignItems: "center", justifyContent: "center"}}>
        <Button style={{width: "10rem", backgroundColor: "green"}} variant="contained" value="for" onClick={handleClick}>
          For
        </Button>
        <Button style={{width: "10rem", backgroundColor: "red"}} variant="contained" color="secondary" value="against" onClick={handleClick}>
          Against
        </Button>
        <Button style={{width: "10rem"}} variant="contained" color="primary" value="neutral" onClick={handleClick}>
          Neutral
        </Button>
      </Box>
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