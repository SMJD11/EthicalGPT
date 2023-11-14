// Import React and other necessary libraries
import OpenAI from "openai";
import React, {
  useState
} from "react";
// Import Material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Popup from "../component/Popup";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
//environment variable from .env file
// Define a custom component for the home page screen
//const API_TOKEN = ;
//console.log(API_TOKEN);
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,//process.env["OPENAI_API_KEY"],
  dangerouslyAllowBrowser: true,
});
function Home() {
  // Use state hooks to store the user input and the result
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false); // Use a state hook to store the loading status
  // Define a function to handle the user input change
  const handleChange = (event) => {
    setQuestion(event.target.value);
  };
  // Define a function to handle the button click
  const handleClick = async (event) => { // Add async keyword
    // Get the button value
    // Use await keyword to get the chat completion result
    const stance = event.target.value;
    setLoading(true); // Set the loading status to true before calling the API
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:'You are an assistant that only answers ethical questions. Three options will be past to you at the beginning of the user request: for, against, nuetral. You must answer the question in line with the option passed. If the question is not an ethical question, say: I only answer ethical question.'
        },
        {
          role: 'user',
          content: stance + " " + question
        }
      ], // Use the question state as the user message
      model: 'gpt-3.5-turbo',
      max_tokens: 100,
    });
    // Use the response field of the chat completion result as the result state
    setResult(chatCompletion.choices[0].message.content);
    setLoading(false); // Set the loading status to false after getting the result
  };
  // Return the JSX code for rendering the home page screen
  const [buttonPopup, setButtonPopup] = useState(false);
  const [aboutbuttonPopup, setAboutButtonPopup] = useState(false);
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
          <Button onClick={() => setAboutButtonPopup(true)} color="inherit" >
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
          <Button onClick={() => setButtonPopup(true)} color="inherit" >
            How to Use
          </Button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h2 style={{ color: 'black' }}>How to Use</h2>
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
      <Box style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
        <Button style={{ width: "10rem", backgroundColor: "green" }} variant="contained" value="for" onClick={handleClick}>
          For
        </Button>
        <Button style={{ width: "10rem", backgroundColor: "red" }} variant="contained" color="secondary" value="against" onClick={handleClick}>
          Against
     </Button>
        <Button style={{ width: "10rem" }} variant="contained" color="primary" value="neutral" onClick={handleClick}>
          Neutral
        </Button>
</Box>
   <div className="result">
        {loading && (
          <CircularProgress /> // Display the loading animation while waiting for the result
        )}
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