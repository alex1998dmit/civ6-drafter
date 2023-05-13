import styled from "@emotion/styled";
import { Divider, Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import rootStore from "../../store/Root";

const LeadersRanked = observer(() => {
    return (
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h3">
                    Тир наций
                </Typography>
            </Grid>
            <Grid item container xs={12}>
                <Grid type item xs={2} container alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h4">
                        Blocked
                    </Typography>
                </Grid>
                <Grid type item xs={10} container>
                    {rootStore.leadersStore.blockedLeaders.map((leader) => (
                        <WrapperStyled>
                            <AvatarBadge
                                alt={leader.name}
                                src={leader.avatar}
                            />
                            <Typography variant="text16">
                                {/* {leader.name} */}
                            </Typography>
                        </WrapperStyled>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>

            <Grid item container xs={12}>
                <Grid type item xs={1} container alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h4">
                        S
                    </Typography>
                </Grid>
                <Grid type item xs={11} container>
                    {rootStore.leadersStore.SRankedLeaders.map((leader) => (
                        <WrapperStyled>
                            <AvatarBadge
                                alt={leader.name}
                                src={leader.avatar}
                            />
                            <Typography variant="text16">
                                {/* {leader.name} */}
                            </Typography>
                        </WrapperStyled>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>

            <Grid item container xs={12}>
                <Grid type item xs={1} container alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h4">
                        A
                    </Typography>
                </Grid>
                <Grid type item xs={11} container>
                    {rootStore.leadersStore.ARankedLeaders.map((leader) => (
                        <WrapperStyled>
                            <AvatarBadge
                                alt={leader.name}
                                src={leader.avatar}
                            />
                            <Typography variant="text16">
                                {/* {leader.name} */}
                            </Typography>
                        </WrapperStyled>
                    ))}
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item container xs={12}>
                <Grid type item xs={1} container alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h4">
                        B
                    </Typography>
                </Grid>
                <Grid type item xs={11} container>
                    {rootStore.leadersStore.BRankedLeaders.map((leader) => (
                        <WrapperStyled>
                            <AvatarBadge
                                alt={leader.name}
                                src={leader.avatar}
                            />
                            <Typography variant="text16">
                                {/* {leader.name} */}
                            </Typography>
                        </WrapperStyled>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>

            <Grid item container xs={12}>
                <Grid type item xs={1} container alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
                    <Typography variant="h4">
                        C
                    </Typography>
                </Grid>
                <Grid type item xs={11} container>
                    {rootStore.leadersStore.CRankedLeaders.map((leader) => (
                        <WrapperStyled>
                            <AvatarBadge
                                alt={leader.name}
                                src={leader.avatar}
                            />
                            <Typography variant="text16">
                                {/* {leader.name} */}
                            </Typography>
                        </WrapperStyled>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
        </Grid>
    )
})

const AvatarBadge = styled.img`
    width: 50px;
    height: 50px;
`

const WrapperStyled = styled.div`
display: flex;
align-content: center;
justify-content: center;
align-items: center;
    
`

export default LeadersRanked;
