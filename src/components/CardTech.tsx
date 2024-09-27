
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ComponentProps {
    image: string;
    title: number | string;
    text: number | string | React.ReactElement;
}

export default function CardTech({image, title, text}: ComponentProps) {
    return (
        <Card sx={{ display: 'flex', backgroundColor:'#c9c9c9' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h4" fontWeight={600} sx={{ color: 'black'}}>
                    {title}
                </Typography>
                
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Typography
                        component="div"
                        sx={{ color: 'black' }}
                        fontSize={12}
                    >
                        {text}
                    </Typography>
                </Box>
            </Box>
            <CardMedia
                component="img"                
                sx={{ width: 150, height: 100, maxWidth: 150 }}
                image={image}
                alt="Tech"
            />
        </Card>
    );
}