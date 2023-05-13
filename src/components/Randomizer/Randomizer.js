import { Button, Grid } from "@mui/material";
import RandomizerResults from "./RandomizerResults";
import rootStore from "../../store/Root";
import { observer } from "mobx-react-lite";


const Randomizer = observer(() => {
    const { randomizerStore } = rootStore;
    console.log(randomizerStore.firstTeamLeaders);
    return (
        <Grid container item xs={12}>
            <Grid item xs={12}>
                <Button onClick={randomizerStore.randomize}>
                    Generate
                </Button>
            </Grid>
            <Grid item xs={6}>
                <RandomizerResults leaders={randomizerStore.firstTeamLeaders} />
            </Grid>
            <Grid item xs={6}>
                <RandomizerResults leaders={randomizerStore.secondTeamLeaders}  />
            </Grid>
        </Grid>
    )
});

export default Randomizer;
