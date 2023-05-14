import { Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import * as React from 'react';
import rootStore from "../../store/Root";
import LeaderBadge from "../LeaderBadge/LeaderBadge";

const LeadersList = observer(() => {
    return (
        <Grid item xs={12} container spacing={2}>
            <Grid item xs={12} pb={3}>
                <Typography align="start" variant="h3">
                    Все лидеры
                </Typography>
            </Grid>
            <Grid item xs={12} container>
                {rootStore.leadersStore.leaders.map((leader, index) => (
                    <LeaderBadge leader={leader} isClickable />
                ))}
            </Grid>
        </Grid>
    )
})

export default LeadersList;
