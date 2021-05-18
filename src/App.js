import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import CropFreeRoundedIcon from '@material-ui/icons/CropFreeRounded';
import QRCode from "react-qr-code";

const useStyles = makeStyles((theme) => ({
    root: {
      height: "100%",
      textAlign: 'center',
    },
    imgBox: {
      maxWidth: "80%",
      maxHeight: "80%",
      margin: "10px"
    },
    img: {
      height: "inherit",
      maxWidth: "inherit",
    },
    input: {
      display: "none"
    }
}));

function App() {
  const classes = useStyles();const [source, setSource] = useState("");const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };
  
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <h1>Ask A Photo</h1>
            <QRCode
              value="123456"
              size={290}
              level={"H"}
              includeMargin={true}
              />
            <h5>Capture image | Scan QR Code</h5>
            {source &&
              <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
                <img src={source} alt={"snap"} className={classes.img}></img>
              </Box>}
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              capture="environment"
              onChange={(e) => handleCapture(e.target)}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCameraRoundedIcon fontSize="large" color="primary" />
              </IconButton>
            </label>
            <span> </span>
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <CropFreeRoundedIcon fontSize="large" color="primary" />
              </IconButton>
            </label>
          </Grid>
        </Grid>
      </div>
      );
  }

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Coming Soon!
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;
