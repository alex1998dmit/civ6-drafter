import { Button, Grid, Typography } from "@mui/material";
import RandomizerResults from "./RandomizerResults";
import rootStore from "../../store/Root";
import { observer } from "mobx-react-lite";
import RandomizerSettings from "./RandomizerSettings";


const Randomizer = observer(() => {
    const { randomizerStore } = rootStore;
    return (
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Typography align="start" variant="h3">
                    Драфт лидеров
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <RandomizerSettings />
            </Grid>
            <Grid item xs={12}>
                <Button onClick={randomizerStore.randomize} variant="contained">
                    Драфт
                </Button>
            </Grid>
            <RandomizerResults />
        </Grid>
    )
});

export default Randomizer;
