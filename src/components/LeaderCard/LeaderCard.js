import { observer } from "mobx-react-lite";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";

const LeaderCard = observer(({ leader }) => {
    return (
        <Card sx={{ width: 250, margin: 1 }}>
            <CardMedia
                sx={{ height: 70, backgroundSize: 'contain' }}
                image={leader.avatar}
                title={leader.name}
                // sx={{ backgroundSize: 'contain' }}
            />
            <CardContent >
                <Typography gutterBottom variant="text16" component="div">
                    {leader.name}
                </Typography>
                {/* <Typography variant="caption" color="text.secondary" letterSpacing={0}>
                    {leader.info}
                </Typography> */}
            </CardContent>
            <CardActions>
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    )
});

export default LeaderCard;
