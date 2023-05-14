import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import rootStore from "../../store/Root";

const DLCConfig = observer(() => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <FormGroup>
                    {rootStore.dlcsStore.dlcs.map((dlc) => (
                        <FormControlLabel control={<Checkbox defaultChecked />} label={dlc.name} />
                    ))}
                    
                    <FormControlLabel required control={<Checkbox />} label="Required" />
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                </FormGroup>
            </Grid>
        </Grid>
    )
})

export default DLCConfig;
