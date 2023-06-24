import { Checkbox, Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import rootStore from "../../../store";
import _ from "lodash";
import { leadersLevels } from "../../../data/leader_levels";

const RandomizerSettings: React.FC = observer(() => {
    const handleOnPlayesAmountHanlder = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
        rootStore.randomizerStore.udpatePlayersAmount(Number(value));
    }

    const handleOnButtonChange = (range: number, value: string) => {
        rootStore.randomizerStore.updateLeadersNumber(Number(range), Number(value));
    }

    const handleOnAllLeadersButtonChange = (number: string) => {
        rootStore.randomizerStore.updateAllLeadersNumber(Number(number));
    }

    const handleOnToogleDuplicate = () => {
        rootStore.randomizerStore.toogleAllowDublicateCivs();
    }

    const handleOnToogleWithTear = () => {
        rootStore.randomizerStore.toogleWithTearOfLeaders();
    }

    const maxPlayersAmount = 8;
    const ranksAmount = 4;
    const maxRankkOptions = 9;

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
                        {_.fill(Array(maxPlayersAmount), 1).map((_, index) => (
                            <FormControlLabel value={index + 1} control={<Radio />} label={index + 1} />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={rootStore.randomizerStore.withTearOfLeaders}
                            onChange={handleOnToogleWithTear}
                        />
                    }
                    label="С тиром наций"
                />
            </Grid>
            {rootStore.randomizerStore.withTearOfLeaders ? 
                <>
                    {_.fill(Array(ranksAmount), 1).map((el, index) => (
                        <Grid item xs={6}>
                            <FormControl>
                                <FormLabel id="s-setting-radio">{leadersLevels[index]}-ранг пик</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="s-setting-radio"
                                    name='s-setting-radio'
                                    onChange={(_, value) => handleOnButtonChange(index, value)}
                                    value={rootStore.randomizerStore.leadersNumber[index]}
                                >
                                    {_.fill(Array(maxRankkOptions), 1).map((_, index) => (
                                        <FormControlLabel value={index} control={<Radio />} label={index} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    ))}
                </>
            : <>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel id="s-setting-radio">Размер драфта</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="s-setting-radio"
                            name='s-setting-radio'
                            onChange={(_, value) => handleOnAllLeadersButtonChange(value)}
                            value={rootStore.randomizerStore.allLeadersNumber}
                        >
                            {_.fill(Array(maxRankkOptions), 1).map((_, index) => (
                                <FormControlLabel value={index} control={<Radio />} label={index} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </>}
            
            <Grid item xs={6}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={rootStore.randomizerStore.isAllowDuplicateCivs}
                            onChange={handleOnToogleDuplicate}
                        />
                    }
                    label="С дубликатами"
                />
            </Grid>
        </Grid>
    );
})

export default RandomizerSettings;
