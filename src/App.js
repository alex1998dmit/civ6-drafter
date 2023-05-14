import { Container, Grid } from '@mui/material';
import './App.css';
import { leaders } from './data/leaders';
import LeaderBadge from './components/LeaderBadge/LeaderBadge';
import { observer } from 'mobx-react-lite';
import rootStore from './store/Root';
import LeadersList from './components/LeadersList/LeadersList';
import LeadersRanked from './components/LeadersRanked/LeadersRanked';
import Randomizer from './components/Randomizer/Randomizer';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import CivsPage from './components/CivsPage/CivsPage';
import MainPage from './components/MainPage/MainPage';

const App = observer(() => {
  return (
    <div className="App">
      <Header />
      <Container maxWidth={1200} sx={{ paddingTop: 3 }}>
        <Routes>
          <Route path='/leaders/list' element={<LeadersList />} />
          <Route path='/leaders/rank' element={<LeadersRanked />} />
          <Route path='/civs/list' element={<CivsPage />} />
          <Route path='/leaders/draft' element={<Randomizer />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
        {/* <LeadersList />
        <LeadersRanked /> */}
        {/* <Randomizer /> */}
      </Container>
    </div>
  );
})

export default App;
