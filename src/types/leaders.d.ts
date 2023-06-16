export type LeaderModel = {
    id: number
    relativeLeaders: Array<number>
    name: string
    avatar: string
    level: number
    allow: boolean
    info?: string
    dlsId?: number
}

export type LeaderLevelsModel = {
    [key: number]: string
}