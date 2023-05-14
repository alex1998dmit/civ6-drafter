import styled from "@emotion/styled";
import { Divider, Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import rootStore from "../../store/Root";
import { useDrag } from "react-dnd";
import RankRow from "./RankRow";

const LeadersRanked = observer(() => {
    const [, drag] = useDrag(() => ({
        type: 'leader',
        collect: (monitor) => ({ isDragging: !!monitor.isDragging() })
      }))
    return (
        <Grid container item xs={12} spacing={2}>
            <RankRow rate='blocked' leaders={rootStore.leadersStore.blockedLeaders} />
            <RankRow rate={0} leaders={rootStore.leadersStore.SRankedLeaders} />
            <RankRow rate={1} leaders={rootStore.leadersStore.ARankedLeaders} />
            <RankRow rate={2} leaders={rootStore.leadersStore.BRankedLeaders} />
            <RankRow rate={3} leaders={rootStore.leadersStore.CRankedLeaders} />
        </Grid>
    )
})

const AvatarBadge = styled.img`
    width: 50px;
    height: 50px;
`

const WrapperStyled = styled.div`
display: flex;
align-content: center;
justify-content: center;
align-items: center;
    
`

export default LeadersRanked;
