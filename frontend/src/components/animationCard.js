
import Grid from '@mui/material/Grid';
import { Card, Typography, Box, Avatar } from '@mui/material';
import { UserAvatar } from './avatar';
import { FlexBox } from './flexbox';
import CardContent from '@mui/material/CardContent';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function AnimationCard({ type = 0 }) {
  return (
    <Card className={`animation-card animation-${type}`}>
      <CardContent>
        <Typography variant='h4' gutterBottom>{type}.</Typography>
        <FlexBox sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <FlexBox className='img-box'>
            <UserAvatar src="https://mui.com/static/images/avatar/1.jpg" className='primary circle' />
            <UserAvatar className='secondary'>ev.</UserAvatar>
          </FlexBox>
          <FlexBox className="info-box" sx={{ flexDirection: 'column' }} pl={3}>
            <div className='info-name'>John Wells</div>
            <div className='info-position'>Chief Revenue Officer</div>
            {type > 6 && <div className='info-phone'>(508).517.5104</div>}
            <FlexBox sx={{ columnGap: 1 }} className='social-box'>
              <a href="" className='social-1'><LinkedInIcon /></a>
              <a href="" className='social-2'><InstagramIcon /></a>
              <a href="" className='social-3'><XIcon /></a>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </CardContent>
    </Card>
  )
}