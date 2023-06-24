import { Grid, Typography, styled } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";

const MainPage: React.FC = observer(() => {
    return (
        <Grid container>
            <Grid item xs={8} container justifyContent={'start'}>
                <Typography variant="h4">
                    Добро пожаловать в драфтер наций для цивилизаций!
                </Typography>
                <br />
                <Typography variant="subtitle1">
                    Чтобы драфт был интереснее и справедливее выборка лидеров делается на основании тира наций.
                    Лидеры разделены по умолчанию <Link to='/leaders/ranked'>следующим образом</Link>. Вы можете изменить тир лидеров как хотите
                    и задрафтить лидеров в соответствии с вашим выбором  (Обновлять страницу не нужно, все изменения
                    живут в рамках сессии в браузере).
                </Typography>
            </Grid>
            <Grid item xs={12} container justifyContent={'start'} alignContent={'start'}>
                <ul>
                    <li><StyledLink to='/leaders/draft'>Драфт лидеров</StyledLink></li>
                    <li><StyledLink to='/leaders/list'>Список лидеров</StyledLink></li>
                    <li><StyledLink to='/leaders/rank'>Тир лидеров</StyledLink></li>
                    <li><StyledLink to='/civs/list'>Список наций</StyledLink></li>
                </ul>
            </Grid>
        </Grid>
    )
});

const StyledLink = styled(Link)`
  text-decoration: none;
`


export default MainPage;
