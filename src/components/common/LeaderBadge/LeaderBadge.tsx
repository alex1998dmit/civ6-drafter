import { observer } from "mobx-react-lite";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { LeaderBadgeProps } from './LeaderBadge.d';
import { Badge, Typography, styled } from "@mui/material";

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
                border: `1px solid gray`,
                borderRadius: '16px',
                margin: '4px',
                borderColor: leader.allow ? 'lightGray' : 'red',
            }}
        >
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={<SmallAvatar src={leader.civ.avatar} />}
            >        
                <Avatar
                    alt={leader.name}
                    src={leader.avatar}
                />
            </Badge>
            <Typography align="center">
                {leader.name}
            </Typography>
        </Stack>
    )
})

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
}));

LeaderBadge.defaultProps = {
    isClickable: false,
}

export default LeaderBadge;
