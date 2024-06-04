import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MainComponent from '../components/main'
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import AnimationCard from '../components/animationCard';

const Bar = styled(Box, {})(({ }) => ({
  position: 'absolute',
  height: '30px',
  left: '0px',
  background: '#52bbca',
  borderTopRightRadius: '13px',
  borderBottomRightRadius: '13px',
  boxShadow: '-1px 5px 16px 0px #b9b8b8'
}));

export default function Animation() {
  const profileInfo = {
    username: 'John Wellx',
    position: 'Chief Revenue Officer',
    phone: '(508).517.5104',
    social: {
      instagram: '',
      linkdin: '',
      twitter: ''
    }
  }

  return (
    <Box sx={{ overflow: "hidden" }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          background: "#ddf1ef",
          padding: '10px 25px',
        }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex' }}>
            <img
              src='images/logo.png'
              style={{
                height: '50px'
              }}
            />
            <div
              style={{
                marginLeft: '10px',
                fontSize: '33px',
                fontWeight: 'bold',
                color: '#565656'
              }}
            >
              GLIIDE.AI
            </div>
          </div>
          <div
            style={{
              padding: '6px',
              background: 'white'
            }}
          >
            <Button sx={{
              color: '#52bbca',
              marginRight: '10px'
            }} variant="text">Login</Button>
            <Button sx={{
              background: '#52bbca'
            }} variant="contained">Sign Up</Button>
          </div>
        </Box>
      </AppBar>
      <Box
        sx={{
          background: "#ddf1ef",
          minHeight: 'calc(100vh - 70px)',
          padding: '20px'
        }}
      >
        <Typography variant="h4" align='center' sx={{ width: '100%', fontWeight: 'bold' }}>Select Animation:</Typography>
        <Box mt={5}>
          <Grid container spacing={4} sx={{ maxWidth: 1100, mx: 'auto' }}>
            <Grid item xs={6}>
              <AnimationCard type={1} />
            </Grid>
            <Grid item xs={6}>
              <AnimationCard type={2} />
            </Grid>
            <Grid item xs={6}>
              <AnimationCard type={3} />
            </Grid>
            <Grid item xs={6}>
              <AnimationCard type={4} />
            </Grid>
            <Grid item xs={6}>
              <AnimationCard type={5} />
            </Grid>
            <Grid item xs={6}>
              <AnimationCard type={6} />
            </Grid>
            <Grid item xs={6}>
              <AnimationCard type={7} />
            </Grid>
            <Grid item xs={6}>
              <AnimationCard type={8} />
            </Grid>
            <Grid item xs={6}>
              <AnimationCard type={9} />
            </Grid>
            <Grid item xs={6}>
              <AnimationCard type={10} />
            </Grid>
            <Grid item xs={6}>
              <AnimationCard type={11} />
            </Grid>
            <Grid item xs={6}>
              <AnimationCard type={12} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}