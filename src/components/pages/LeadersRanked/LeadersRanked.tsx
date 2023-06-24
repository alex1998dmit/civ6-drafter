import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import rootStore from "../../../store";
import RankRow from "./RankRow";
import React from "react";

const LeadersRanked: React.FC = observer(() => {
    return (
        <Grid container item xs={12} spacing={2}>
            <RankRow rate={-1} leaders={rootStore.leadersStore.blockedLeaders} />
            <RankRow rate={0} leaders={rootStore.leadersStore.SRankedLeaders} />
            <RankRow rate={1} leaders={rootStore.leadersStore.ARankedLeaders} />
            <RankRow rate={2} leaders={rootStore.leadersStore.BRankedLeaders} />
            <RankRow rate={3} leaders={rootStore.leadersStore.CRankedLeaders} />
        </Grid>
    )
})

export default LeadersRanked;
