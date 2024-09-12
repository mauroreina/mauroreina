import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';



export default function Projects() {
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Projects
        </Typography>
        <Typography>List of main projects and descriptions</Typography>
      </div>      
      
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 6 }}>
          component
        </Grid>
      </Grid>
    </Box>
  );
}