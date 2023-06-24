import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import rootStore from "../../../store";
import _ from "lodash";
import LeaderBadge from "../../common/LeaderBadge/LeaderBadge";

const DebugPage = observer(() => {
    const groupedLeaders = _.groupBy(
        rootStore.leadersStore.uniqRandomCivLeaders,
        leader => leader.civId
    );
    console.log(rootStore.leadersStore.availableAndUniqLeaders.length);

    return (
        <Grid container>
            <Grid item xs={12}>
                {rootStore.randomizerStore.SRankedLeaders.map((leader) => (
                    <LeaderBadge leader={leader} />
                ))}
            </Grid>
            <Grid item xs={12}>
                {Object.keys(groupedLeaders).map((key) => (
                    <Grid container item xs={12}>
                        <Grid item xs={2}>
                            {key}:
                        </Grid>
                        <Grid item xs={10} container>
                            {groupedLeaders[key].map((leader) => (
                                <Grid item xs={12}>
                                    <LeaderBadge leader={leader} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
})

export default DebugPage;
