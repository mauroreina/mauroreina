import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CardInfo from '../components/CardInfo';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import backgroundImg from '../assets/profile_pic.jpeg'
import { Button, Link, Stack } from '@mui/material';

interface param {
  setCurrentContent: (param: number) => void,
}

export default function Home({ setCurrentContent }: param) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 333,
          width: 250,
          maxHeight: { xs: 233, md: 233 },
          maxWidth: { xs: 350, md: 550 },
        }}
        alt="Profile"
        src={backgroundImg}
      />
      <Typography gutterBottom sx={{ fontWeight: 500, fontSize: '20px' }}>
        Welcome to my profile
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color:'#0096FF', fontSize:17}} >
        Software Engineer | Web Developer
      </Typography>
      <Typography  sx={{ fontWeight: 500, fontSize: '16px' }}>
        With over 20 years in IT projects, I specialize in building user-focused applications across various technologies. I'm a strategic thinker and problem solver, skilled in leadership and teamwork, known for delivering high-quality, impactful solutions with attention to detail.
      </Typography>
      <Grid container spacing={2} columns={12} mt={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CardInfo 
            Icon={<RoomIcon />} 
            title="Location"
            text="Greater Orlando, FL - USA"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CardInfo 
              Icon={<EmailIcon />} 
              title="Email"
              text="mauroreina@gmail.com"
            />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CardInfo 
            Icon={<PhoneIcon />} 
            title="Call"
            text="+1 321-503-8420"
          />
        </Grid>        
        <Grid size={{ xs: 12, md: 6 }}>
          <CardInfo 
            Icon={<LinkedInIcon />} 
            title="LinkedIn"
            text={<Link href='https://www.linkedin.com/in/mauricio-reina-29201539/'>Click here</Link>}
          />
        </Grid>
      </Grid>
      <Stack direction="row" spacing={4} mt={5}>        
          <Button 
            size="small" 
            variant={"contained"} 
            onClick={()=>setCurrentContent(2)}
            style={{maxWidth: '120px', maxHeight: '30px', minWidth: '120px', minHeight: '30px'}}
          >
            Services
          </Button>
        
          <Button 
            size="small" 
            variant={"contained"} 
            onClick={()=>setCurrentContent(3)}
            style={{maxWidth: '120px', maxHeight: '30px', minWidth: '120px', minHeight: '30px'}}
          >
            Technologies
          </Button>
      </Stack>
    </Box>
  );
}