import { Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import Leader from "./LeaderRankInfo";
import _ from "lodash";
import rootStore from "../../store/Root";
import { useDrop } from "react-dnd";
import { leadersLevels } from "../../data/leader_levels";

const RankRow = observer(({ leaders, rate }) => {
  const handleDrop = (item) => {
    const leader = rootStore.leadersStore.getLeader(item.id);
    if (rate === 'blocked') {
      leader.forbidLeader();
    } else {
      leader.allowLeader();
      leader.changeLevel(rate);
    }
  }

  const [, drop] = useDrop({
    accept: 'card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    drop: handleDrop
  })

  return (
    <Grid
      item
      xs={12}
      ref={drop}
      container
      sx={{ borderBottom: '2px solid gray', paddingBottom: 2 }}
    >
      <Grid type item xs={2} container alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h4">
          {leadersLevels[rate]}
        </Typography>
      </Grid>
      <Grid type item xs={10} container>
        {leaders.map((leader, index) => (
          <Leader
            leader={leader}
            index={index}
          />
        ))}
      </Grid>
    </Grid>
  )
});

export default RankRow;
