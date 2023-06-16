import { makeAutoObservable, runInAction } from "mobx";
import { leadersLevels } from "../data/leader_levels";
import { LeaderModel } from "../types/leaders";

class LeaderStore {
    id: number;
    name: string;
    avatar: string;
    level: number;
    allow: boolean;
    info: string;

    constructor(leader: LeaderModel) {
        this.id = leader.id;
        this.name = leader.name;
        this.avatar = leader.avatar;
        this.level = leader.level;
        this.allow = leader.allow;
        this.info = leader.info;
        makeAutoObservable(this)
    }

    toogleAllowLeader = () => {
        this.allow = !this.allow;
    }

    forbidLeader = () => {
        this.allow = false;
    }

    allowLeader = () => {
        this.allow = true;
    }

    get levelDescription() {
        return leadersLevels[this.level];
    }

    changeLevel = (level: number) => {
        console.log(level);
        this.level = level;
    }
}

export default LeaderStore;
