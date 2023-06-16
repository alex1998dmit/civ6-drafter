import { observer } from "mobx-react-lite";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import { FC } from "react";

const Header: FC = observer(() => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to='/leaders/list'>
                  Список
                </Link>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to='/leaders/rank'>
                Ранг
                </Link>
              </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to='/leaders/draft'>
                Драфт
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to='/civs/list'>
                  Список цивилизаций
                </Link>
              </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

export default Header;