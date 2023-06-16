import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import rootStore from "../../../store";

const RandomizerSettings: React.FC = observer(() => {
    const handleOnPlayesAmountHanlder = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
        rootStore.randomizerStore.udpatePlayersAmount(Number(value));
    }

    const handleOnButtonChange = (rang: number, value: string) => {
        rootStore.randomizerStore.updateLeadersNumber(Number(rang), Number(value));
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <FormControl>
                    <FormLabel id="amount-playes">Кол-во игроков {rootStore.randomizerStore.playersAmount}</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="amount-playes"
                        name="amount-playes"
                        onChange={handleOnPlayesAmountHanlder}
                        value={rootStore.randomizerStore.playersAmount}
                    >
                        <FormControlLabel value={1} control={<Radio />} label="1" />
                        <FormControlLabel value={2} control={<Radio />} label="2" />
                        <FormControlLabel value={3} control={<Radio />} label="3" />
                        <FormControlLabel value={4} control={<Radio />} label="4" />
                        <FormControlLabel value={5} control={<Radio />} label="5" />
                        <FormControlLabel value={6} control={<Radio />} label="6" />
                        <FormControlLabel value={7} control={<Radio />} label="7" />
                        <FormControlLabel value={8} control={<Radio />} label="8" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <FormLabel id="s-setting-radio">S-ранг пик</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="s-setting-radio"
                        name="s-setting-radio"
                        onChange={(e, value) => handleOnButtonChange(0, value)}
                        value={rootStore.randomizerStore.leadersNumber[0]}
                    >
                        <FormControlLabel value={0} control={<Radio />} label="0" />
                        <FormControlLabel value={1} control={<Radio />} label="1" />
                        <FormControlLabel value={2} defaultChecked control={<Radio />} label="2" />
                        <FormControlLabel value={3} control={<Radio />} label="3" />
                        <FormControlLabel value={4} control={<Radio />} label="4" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <FormLabel id="a-setting-radio">A-ранг пик</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="a-setting-radio"
                        name="a-setting-radio"
                        onChange={(e, value) => handleOnButtonChange(1, value)}
                        value={rootStore.randomizerStore.leadersNumber[1]}
                    >
                        <FormControlLabel value={0} control={<Radio />} label="0" />
                        <FormControlLabel value={1} control={<Radio />} label="1" />
                        <FormControlLabel value={2} defaultChecked control={<Radio />} label="2" />
                        <FormControlLabel value={3} control={<Radio />} label="3" />
                        <FormControlLabel value={4} control={<Radio />} label="4" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <FormLabel id="b-setting-radio">B-ранг пик</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="b-setting-radio"
                        name="b-setting-radio"
                        onChange={(e, value) => handleOnButtonChange(2, value)}
                        value={rootStore.randomizerStore.leadersNumber[2]}
                    >
                        <FormControlLabel value={0} control={<Radio />} label="0" />
                        <FormControlLabel value={1} control={<Radio />} label="1" />
                        <FormControlLabel value={2} defaultChecked control={<Radio />} label="2" />
                        <FormControlLabel value={3} control={<Radio />} label="3" />
                        <FormControlLabel value={4} control={<Radio />} label="4" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <FormLabel id="c-setting-radio">C-ранг пик</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="c-setting-radio"
                        name="c-setting-radio"
                        onChange={(e, value) => handleOnButtonChange(3, value)}
                        value={rootStore.randomizerStore.leadersNumber[3]}
                    >
                        <FormControlLabel value={0} control={<Radio />} label="0" />
                        <FormControlLabel value={1} control={<Radio />} label="1" />
                        <FormControlLabel value={2} defaultChecked control={<Radio />} label="2" />
                        <FormControlLabel value={3} control={<Radio />} label="3" />
                        <FormControlLabel value={4} control={<Radio />} label="4" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    );
})

export default RandomizerSettings;
