import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import LeadersList from '../../pages/LeadersList/LeadersList';
import LeadersRanked from '../../pages/LeadersRanked/LeadersRanked';
import Randomizer from '../../pages/Randomizer/Randomizer';
import { Route, Routes } from 'react-router-dom';
import Header from '../../common/Header/Header';
import CivsPage from '../../pages/CivsPage/CivsPage';
import MainPage from '../../pages/MainPage/MainPage';
import { FC } from 'react';
import DebugPage from '../../pages/DebugPage/DebugPage';

const App: FC = observer(() => {
  return (
    <div className="App">
      <Header />
      <Container sx={{ paddingTop: 3 }}>
        <Routes>
          <Route path='/leaders/list' element={<LeadersList />} />
          <Route path='/leaders/rank' element={<LeadersRanked />} />
          <Route path='/civs/list' element={<CivsPage />} />
          <Route path='/leaders/draft' element={<Randomizer />} />
          <Route path='/debug' element={<DebugPage />} />
          <Route path='/civ6-drafter' element={<MainPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Container>
    </div>
  );
})

export default App;
