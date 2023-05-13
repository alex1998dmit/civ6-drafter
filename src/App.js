import { Container, Grid } from '@mui/material';
import './App.css';
import { leaders } from './data/leaders';
import LeaderBadge from './components/LeaderBadge/LeaderBadge';
import { observer } from 'mobx-react-lite';
import rootStore from './store/Root';
import LeadersList from './components/LeadersList/LeadersList';
import LeadersRanked from './components/LeadersRanked/LeadersRanked';
import Randomizer from './components/Randomizer/Randomizer';

const App = observer(() => {
  return (
    <div className="App">
      <Container maxWidth={1200}>
        {/* <LeadersList />
        <LeadersRanked /> */}
        <Randomizer />
      </Container>
    </div>
  );
})

export default App;
