import { Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const MainPage = observer(() => {
    return (
        <Grid container>
            <Grid item xs={8} container justifyContent={'start'}>
                <Typography variant="h4" align="start">
                    Добро пожаловать в драфтер наций для цивилизаций!
                </Typography>
                <br />
                <Typography variant="text16" align="start">
                    Чтобы драфт был интереснее и справедливее выборка лидеров делается на основании тира наций.
                    Лидеры разделены по умолчанию <Link to='/leaders/ranked'>следующим образом</Link>. Вы можете изменить тир лидеров как хотите
                    и задрафтить лидеров в соответствии с вашим выбором  (Обновлять страницу не нужно, все изменения
                    живут в рамках сессии в браузере).
                </Typography>
            </Grid>
            <Grid item xs={12} container justifyContent={'start'} alignContent={'start'}>
                <ul>
                    <li><Link to='/leaders/draft'>Драфт лидеров</Link></li>
                    <li><Link to='/leaders/list'>Список лидеров</Link></li>
                    <li><Link to='/leaders/rank'>Тир лидеров</Link></li>
                    <li><Link to='/civs/list'>Список наций</Link></li>
                </ul>
            </Grid>
        </Grid>
    )
});

export default MainPage;
