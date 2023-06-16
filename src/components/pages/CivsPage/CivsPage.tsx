import { Avatar, Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import rootStore from "../../../store";
import LeaderBadge from "../../common/LeaderBadge/LeaderBadge";

const CivsPage = observer(() => {
  return (
    <Grid container item xs={12}>
      {rootStore.civsStore.civs.map((civ) => (
        <Grid container item xs={12} sx={{ borderBottom: '1px solid gray' }}>
          <Grid item xs={2} container alignContent={'center'} justifyContent={'center'} pb={2} sx={{ minHeight: '50px' }}>
            {/* {civ.name} */}
            <Avatar src={civ.avatar} />
          </Grid>
          <Grid item xs={10}>
            {civ.leaders.map((leader) => (
              <LeaderBadge leader={leader} key={leader.id} isClickable />
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
})

export default CivsPage;
