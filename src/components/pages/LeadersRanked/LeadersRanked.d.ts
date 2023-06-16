import LeaderStore from "../../../store/Leader"

export type LeaderRankInfoProps = {
    leader: LeaderStore
    index?: number
}

export type RankRowProps = {
    leaders: Array<LeaderStore>;
    rate: number;
}