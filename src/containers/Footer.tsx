import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="mailto:mauroreina@gmail.com">
        Mauricio Reina
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: { xs: 2, sm: 4 },
            mb: { xs: 2, sm: 4 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Copyright />
        </Box>
    </React.Fragment>
  );
}