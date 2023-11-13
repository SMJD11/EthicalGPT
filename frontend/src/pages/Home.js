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
import Popup from "../component/Popup";
import { Box } from "@mui/material";
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
  const[buttonPopup, setButtonPopup] = useState(false);
  const[aboutbuttonPopup, setAboutButtonPopup] = useState(false);
  return (
    <div className="home">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ethical AI
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
      <Box m="2rem 10rem 2rem 10rem">
        <TextField
          id="question"
          name="question"
          placeholder="Type in an ethical question"
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