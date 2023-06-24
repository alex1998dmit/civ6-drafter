import { observer } from "mobx-react-lite";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import { FC } from "react";
import styled from "@emotion/styled";
import { HeaderOptionsType } from './Header.d';

const options: Array<HeaderOptionsType> = [
  {
    title: 'Главная',
    to: '/civ6-drafter',
  },
  {
    title: 'Список',
    to: '/leaders/list',
  },
  {
    title: 'Ранг',
    to: '/leaders/rank',
  },
  {
    title: 'Драфт',
    to: '/leaders/draft',
  },
  {
    title: 'Список цивилизаций',
    to: '/civs/list',
  },
]

const Header: FC = observer(() => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          {options.map((option: HeaderOptionsType) => (
            <Typography variant="h6" pr={3}>
              <StyledLink to={option.to}>
                {option.title}
              </StyledLink>
            </Typography>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
});

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

export default Header;