
import { Card, CardHeader } from '@mui/material';

interface ComponentProps {
    Icon: React.ReactElement;
    title: number | string;
    text: number | string | React.ReactElement;
}

export default function CardInfo({Icon, title, text}: ComponentProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={Icon}
                title={title}
                subheader={text}
            />
        </Card>
    );
}