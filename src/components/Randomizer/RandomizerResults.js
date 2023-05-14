import { Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import LeaderCard from "../LeaderCard/LeaderCard";
import _ from "lodash";
import rootStore from "../../store/Root";
import LeaderBadge from "../LeaderBadge/LeaderBadge";

const RandomizerResults = observer(() => {
    return (
        <Grid container>
            {/* <Grid item xs={12}>
                <Typography variant="text16">
                    Результат драфта:
                </Typography>
            </Grid> */}
            <Grid item xs={12} container>
                {rootStore.randomizerStore.draftResults.map((row) =>
                    <Grid item xs={12} container sx={{ borderBottom: '1px solid gray'}}>
                        {row.map((leader) => (
                            // <Grid item xs={3}>
                                <LeaderBadge leader={leader} />
                            // </Grid>
                        ))}
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
});

export default RandomizerResults;
