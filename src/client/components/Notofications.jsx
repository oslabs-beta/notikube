import { 
    Box,
    Button,
    Checkbox, 
    FormControlLabel,
    TextField 
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Notifications() {

    const [ emailState, setEmailState ] = useState(false);
    const [ phoneState, setPhoneState ] = useState(false);
    const [configuration, setConfiguration] = useState({});
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getConfig();
    }, []);

    useEffect(() => {
      function boxState() {
        if (configuration.email === 'true') {
          setEmailState(true)
            } else {
              setEmailState(false)
            }
        
        if (configuration.phone === 'true') {
          setPhoneState(true)
          } else {
            setPhoneState(false)
          }
      }

      boxState();

    }, [configuration.email, configuration.phone]);

    

  function getConfig() {
    fetch('/api/currentConfig')
      .then((res) => res.json())
      .then((data) => setConfiguration(data))
      .catch((err) => 'Error loading current settings')

    setLoading(false)
  }

  console.log('current config', configuration);
  console.log('email state', emailState);


    
  const handleSubmit = (event) => {

  event.preventDefault();
  const data = new FormData(document.getElementById("form"));
  const contactPreference = {
    memory: data.get('memory'),
    cpu: data.get('cpu')
  };

  const notificationSettings = {
    memory: contactPreference.memory,
    cpu: contactPreference.cpu,
    email: emailState,
    phone: phoneState
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(notificationSettings)
    }

    console.log('notification settings', notificationSettings)
    console.log('options body', options.body)
    console.log('handleSubmit')

    fetch('/api/notificationUpdate', options)
    .then(() => alert('Your settings have been saved'))
    .then(() => window.location.reload())

  }



    while (isLoading) {
        return (<div>Loading ...</div>)
    }

    return (

        <Box component="form" id="form" noValidate onSubmit={handleSubmit}
            sx={{
            height: '100%',
            mr: 3,
            }}
        >
            <h2>How Would You Like to be Notified?</h2>
            <FormControlLabel control={<Checkbox checked={emailState} size='large' onChange={() => {
                if (emailState === false) return setEmailState(true);
                setEmailState(false);
            }}/>} label="email" />
            <FormControlLabel control={<Checkbox checked={phoneState} size='large' onChange={() => {
                if (phoneState === false) return setPhoneState(true);
                setPhoneState(false);
            }}/>} label="text" />
            <h2 style={{marginTop:100}}>Threshold Settings</h2>
            <TextField sx={{ backgroundColor:"white", maxWidth:150}}
                fullWidth
                id="memory"
                name="memory"
                label={configuration.memory + " %"}
                margin="normal"
            />
            <br></br>
            <TextField sx={{ backgroundColor:"white", maxWidth:150}}
                fullWidth
                id="cpu"
                name="cpu"
                label={configuration.cpu + " %"}
                margin="normal"
            />
            <br></br>
            <Button variant="contained" type="submit" sx={{mt: 10, maxWidth:200}} onClick={handleSubmit}>save settings</Button>
        </Box>
    )

}




export default Notifications;