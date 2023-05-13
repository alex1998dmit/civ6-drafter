import { Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import LeaderCard from "../LeaderCard/LeaderCard";
import _ from "lodash";

const RandomizerResults = observer(({ leaders }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h4">
                    Результат рандома:
                </Typography>
            </Grid>
            <Grid item xs={12} container>
                {leaders.S.map((leader) => <LeaderCard key={_.uniqueId()} leader={leader} />)}
                {leaders.A.map((leader) => <LeaderCard key={_.uniqueId()} leader={leader} />)}
                {leaders.B.map((leader) => <LeaderCard key={_.uniqueId()} leader={leader} />)}
                {leaders.C.map((leader) => <LeaderCard key={_.uniqueId()} leader={leader} />)}
            </Grid>
        </Grid>
    )
});

export default RandomizerResults;
