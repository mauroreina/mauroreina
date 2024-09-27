import { useEffect, useState, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material/styles';
import AppAppBar from '../../containers/AppAppBar';
import MainContent from '../../containers/MainContent';
import Footer from '../../containers/Footer';
import TemplateFrame from './TemplateFrame';

import getBlogTheme from '../../theme/getBlogTheme';

function Landing() {
    const [mode, setMode] = useState<PaletteMode>('light');
    const [currentContent, setCurrentContent] = useState(1);
    const myRef = useRef<null | HTMLDivElement>(null);

    const blogTheme = createTheme(getBlogTheme(mode));

    // This code only runs on the client side, to determine the system color preference    
    useEffect(() => {
        // Check if there is a preferred mode in localStorage
        const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
        if (savedMode) {
            setMode(savedMode);
        } else {
            // If no preference is found, it uses system preference
            const systemPrefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches;
            setMode(systemPrefersDark ? 'dark' : 'light');
        }
    }, []);

    const changeContainer = (nextContent: number) => {
        setCurrentContent(nextContent);
        if (myRef.current) {
            setTimeout(() => { 
                if (myRef.current)
                    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })                
            }, 100);
        }
    }

    return (
        <TemplateFrame
            mode={mode}
        >
            <ThemeProvider theme={blogTheme}>
                <CssBaseline enableColorScheme />

                <AppAppBar currentContent={currentContent} setCurrentContent={changeContainer} />
                <div ref={myRef}></div>
                <Container
                    maxWidth="lg"
                    component="main"
                    sx={{ display: 'flex', flexDirection: 'column', my: 10, gap: 1 }}
                    
                    >
                    <MainContent currentContent={currentContent} setCurrentContent={changeContainer} />                    
                </Container>
                
                <Footer />
            </ThemeProvider>
        </TemplateFrame>
    )
}

export default Landing;