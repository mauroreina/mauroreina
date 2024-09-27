import * as React from 'react';
import {
  createTheme,
  ThemeProvider,
  PaletteMode
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import getBlogTheme from '../../theme/getBlogTheme';

interface TemplateFrameProps {  
  mode: PaletteMode;  
  children: React.ReactNode;
}

export default function TemplateFrame({
  mode,  
  children,
}: TemplateFrameProps) {
  const blogTheme = createTheme(getBlogTheme(mode));

  return (
    <ThemeProvider theme={blogTheme}>
      <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>        
        <Box sx={{ flex: '1 1', overflow: 'auto' }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}