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
              <h2 style={{color : 'black'}}>ABOUT US</h2>
              <h4 style={{color : 'black'}}>Safwan Majeed</h4>
              <p style={{color : 'black'}}>There was a time and a place for Stephanie to use her magic. The problem was that she had a difficult time determining this. She wished she could simply use it when the desire hit and there wouldn't be any unforeseen consequences. Unfortunately, that's not how it worked and the consequences could be devastating if she accidentally used her magic at the wrong time.</p>
              <h4 style={{color : 'black'}}>Michael Castle</h4>
              <p style={{color : 'black'}}>There was a time and a place for Stephanie to use her magic. The problem was that she had a difficult time determining this. She wished she could simply use it when the desire hit and there wouldn't be any unforeseen consequences. Unfortunately, that's not how it worked and the consequences could be devastating if she accidentally used her magic at the wrong time</p>
              <h4 style={{color : 'black'}}>Christo Karahalios</h4>
              <p style={{color : 'black'}}>There was a time and a place for Stephanie to use her magic. The problem was that she had a difficult time determining this. She wished she could simply use it when the desire hit and there wouldn't be any unforeseen consequences. Unfortunately, that's not how it worked and the consequences could be devastating if she accidentally used her magic at the wrong time</p>
              <h4 style={{color : 'black'}}>Ben King</h4>
              <p style={{color : 'black'}}>There was a time and a place for Stephanie to use her magic. The problem was that she had a difficult time determining this. She wished she could simply use it when the desire hit and there wouldn't be any unforeseen consequences. Unfortunately, that's not how it worked and the consequences could be devastating if she accidentally used her magic at the wrong time</p>
          </Popup>
          <Button onClick = {() => setButtonPopup(true)} color="inherit" >
            How to Use
          </Button>
          <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
              <h2 style={{color : 'black'}}>How to Use</h2>
          </Popup>
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