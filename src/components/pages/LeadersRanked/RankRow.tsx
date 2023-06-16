import { Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import Leader from "./LeaderRankInfo";
import rootStore from "../../../store";
import { useDrop } from "react-dnd";
import { leadersLevels } from "../../../data/leader_levels";
import { RankRowProps } from "./LeadersRanked.d";
import LeaderStore from "../../../store/Leader";

const RankRow: React.FC<RankRowProps> = observer(({ leaders, rate }) => {
  const handleDrop = (item: LeaderStore) => {
    const leader = rootStore.leadersStore.getLeader(item.id);
    if (rate === -1) {
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
      xs={12}
      ref={drop}
      container
      item
      sx={{ borderBottom: '2px solid gray', paddingBottom: 2 }}
    >
      <Grid
        item
        xs={2}
        container
        alignContent={'center'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Typography variant="h4">
          {leadersLevels[rate]}
        </Typography>
      </Grid>
      <Grid item xs={10} container>
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
