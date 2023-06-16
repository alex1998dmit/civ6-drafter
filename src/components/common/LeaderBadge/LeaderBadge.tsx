import { observer } from "mobx-react-lite";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { LeaderBadgeProps } from './LeaderBadge.d';

const LeaderBadge: React.FC<LeaderBadgeProps> = observer(({ leader, isClickable }) => {
    const onClickHandle = () => {
        if (!isClickable) return;
        leader.toogleAllowLeader();
    }

    return (
        <Stack
            direction="row"
            spacing={1}
            onClick={onClickHandle}
            sx={{
                padding: '4px',
            }}
        >
            <Chip
                avatar={<Avatar alt="Natacha" src={leader.avatar} />}
                label={leader.name}
                variant="outlined"
                sx={{
                    ...(!leader.allow && { backgroundColor: 'red' })
                }}
            />
        </Stack>
    )
})

LeaderBadge.defaultProps = {
    isClickable: false,
}

export default LeaderBadge;
