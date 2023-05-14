import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import rootStore from "../../store/Root";
import LeaderBadge from "../LeaderBadge/LeaderBadge";

const CivsPage = observer(() => {
  return (
    <Grid container item xs={12}>
      {rootStore.civsStore.civs.map((civ) => (
        <Grid container item xs={12} sx={{ borderBottom: '1px solid gray' }}>
          <Grid item xs={2}>
            {civ.name}
          </Grid>
          <Grid item xs={10}>
            {civ.leaders.map((leader) => (
              <LeaderBadge leader={leader} key={leader.id} />
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
})

export default CivsPage;
