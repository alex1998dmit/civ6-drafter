import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import _ from "lodash";
import rootStore from "../../../store";
import LeaderBadge from "../../common/LeaderBadge/LeaderBadge";
import React from "react";
import LeaderStore from "../../../store/Leader";

const RandomizerResults: React.FC = observer(() => {
    return (
        <Grid container>
            <Grid item xs={12} container>
                {rootStore.randomizerStore.draftResults.map((row: any) =>
                    <Grid item xs={12} container sx={{ borderBottom: '1px solid gray'}}>
                        {row.map((leader: LeaderStore) => (
                            <LeaderBadge
                                leader={leader}
                            />
                        ))}
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
});

export default RandomizerResults;
