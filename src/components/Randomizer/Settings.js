import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import rootStore from "../../store/Root";

const RandomizerSettings = observer(() => {
    const handleOnButtonChange = (rang, value) => {
        rootStore.randomizerStore.updateLeadersNumber(rang, value);
    }

    return (
        <Grid container>
            <Grid item xs={6}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">S-ранг пик</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onClick={(e, value) => handleOnButtonChange('S', value)}
                    >
                        <FormControlLabel value="0" control={<Radio />} label="0" />
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" defaultChecked control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">A-ранг пик</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onClick={(e, value) => handleOnButtonChange('A', value)}
                    >
                        <FormControlLabel value="0" control={<Radio />} label="0" />
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" defaultChecked control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">B-ранг пик</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onClick={(e, value) => handleOnButtonChange('B', value)}
                    >
                        <FormControlLabel value="0" control={<Radio />} label="0" />
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" defaultChecked control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">C-ранг пик</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onClick={(e, value) => handleOnButtonChange('C', value)}
                    >
                        <FormControlLabel value="0" control={<Radio />} label="0" />
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" defaultChecked control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    );
})

export default RandomizerSettings;
