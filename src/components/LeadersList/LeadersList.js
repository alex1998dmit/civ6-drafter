import { Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import * as React from 'react';
import rootStore from "../../store/Root";
import LeaderBadge from "../LeaderBadge/LeaderBadge";

const LeadersList = observer(() => {
    return (
        <Grid item xs={12} container>
            <Grid item xs={12}>
                <Typography variant="h5">
                    Все лидеры:
                </Typography>
            </Grid>
            <Grid item xs={12} container>
                {rootStore.leadersStore.leaders.map((leader, index) => (
                    <LeaderBadge leader={leader} />
                ))}
            </Grid>
        </Grid>
    )
})

export default LeadersList;
