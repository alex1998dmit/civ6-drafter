import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const LeaderBadge = observer(({ leader }) => {
    return (
        <Stack direction="row" spacing={1} sx={{ padding: '4px' }}>
            {/* <img alt="Natacha" src={''} /> */}
            <Chip
                avatar={<Avatar alt="Natacha" src={leader.avatar} />}
                label={leader.name}
                variant="outlined"
            />
        </Stack>
    )
})

export default LeaderBadge;
