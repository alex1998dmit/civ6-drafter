import LeaderStore from "../store/Leader"

export type LeaderModel = {
    id: number
    relativeLeaders: Array<number>
    name: string
    avatar: string
    level: number
    allow: boolean
    info?: string
    dlsId?: number
    civId: number
}

export type GroupedLeadersByCiv = {
    [key: number]: Array<LeaderStore>;
}

export type LeaderLevelsModel = {
    [key: number]: string
}