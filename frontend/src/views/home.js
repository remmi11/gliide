import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MainComponent from '../components/main'
import { styled } from '@mui/material/styles';

const Bar = styled(Box, {})(({}) => ({
  position: 'absolute',
  height: '30px',
  left: '0px',
  background: '#52bbca',
  borderTopRightRadius: '13px',
  borderBottomRightRadius: '13px',
  boxShadow: '-1px 5px 16px 0px #b9b8b8'  
}));

export default function Home() {
  return (
    <Box sx={{overflow: "hidden"}}>
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
          display: 'flex',
          background: "#ddf1ef",
          minHeight: 'calc(100vh - 70px)',
          padding: '20px'
        }}
      >
        <MainComponent />
      </Box>
      <Bar
        sx={{
          width: '50px',
          top: '40%'
        }}
      />
      <Bar
        sx={{
          width: '200px',
          top: '77%'
        }}
      />
    </Box>
  )
}