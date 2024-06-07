
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

export default function MainComponent() {
  const onBuildSignature = () => {
    const options = {
      method: 'GET',
      header: {

      }
    };

    fetch(`https://api.scrapin.io/enrichment/profile?linkedinUrl=https://www.linkedin.com/in/naor-magnagi-87b007b5/?originalSubdomain=il`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return (
    <Grid container spacing={2} style={{ zIndex: 1 }}>
      <Grid
        item xs={6} md={6}
        sx={{
          margin: 'auto',
          fontSize: '31px',
          fontWeight: 'bold',
          paddingLeft: '10% !important'
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '10px' }}>Build</div>
          <div className='slide-right' style={{ color: '#ad6089' }}>AI-Powered</div>
        </div>
        <div>
          Email Signatures
          <span style={{
            fontSize: '20px',
            fontWeight: '400',
            fontStyle: 'italic',
            marginLeft: '5px'
          }}>in seconds.</span>
        </div>
        <div
          style={{
            display: 'flex',
            padding: '15px',
            width: 'fit-content',
            background: 'rgb(173, 96, 137)',
            borderRadius: '16px',
            border: '10px solid white',
            margin: '30px 0px'
          }}
        >
          <TextField
            id="outlined-basic"
            label="Copy & Paste Your Linked in URL"
            variant="outlined"
            sx={{
              background: 'white',
              minWidth: '300px',
              borderColor: 'white',
              marginRight: '10px'
            }}
          />
          <Button variant="contained" onClick={onBuildSignature}>Build</Button>
        </div>
        <div
          style={{ marginBottom: '50px', display: 'flex' }}
        >
          <span style={{
            fontSize: '20px',
            fontWeight: '400',
            fontStyle: 'italic',
            marginTop: '4px',
            color: '#4e4e4e'
          }}>...works with</span>
          <img
            style={{
              width: '36px',
              marginLeft: '16px',
              height: '28px',
              marginRight: '6px'
            }} src="images/google.png" />
          <span
            style={{
              fontWeight: '400',
              color: '#4e4e4e',
              fontSize: '25px'
            }}
          >Gmail</span>
          <img
            style={{
              width: '36px',
              marginLeft: '14px',
              marginRight: '5px',
              marginBottom: '9px'
            }} src="images/outlook.png" />
          <span
            style={{
              fontWeight: '400',
              color: '#346faf',
              fontSize: '25px'
            }}
          >Outlook</span>
        </div>
      </Grid>
      <Grid item xs={6} md={6}>
        <img style={{ width: '90%' }} src="images/profile-card.png" />
      </Grid>
    </Grid>
  )
}