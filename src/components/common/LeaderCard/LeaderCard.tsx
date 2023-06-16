import { observer } from "mobx-react-lite";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";
import { LeaderCardProps } from './LeaderCard.d';

const LeaderCard: React.FC<LeaderCardProps> = observer(({ leader }) => {
    return (
        <Card sx={{ width: 200, margin: 1 }}>
            <CardMedia
                sx={{ height: 70, backgroundSize: 'contain' }}
                image={leader.avatar}
                title={leader.name}
                // sx={{ backgroundSize: 'contain' }}
            />
            <CardContent >
                <Typography gutterBottom component="div">
                    {leader.name} {leader.level}
                </Typography>
            </CardContent>
        </Card>
    )
});

export default LeaderCard;
