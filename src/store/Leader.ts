import { makeAutoObservable } from "mobx";
import { leadersLevels } from "../data/leader_levels";
import { LeaderModel } from "../types/leaders";

class LeaderStore {
    id: number;
    name: string;
    avatar: string;
    level: number;
    info: string;

    constructor(leader: LeaderModel) {
        this.id = leader.id;
        this.name = leader.name;
        this.avatar = leader.avatar;
        this.level = leader.level;
        this.info = leader.info;
        makeAutoObservable(this)
    }

    toogleAllowLeader = () => {
        this.level = this.level === -1 ? 0 : -1;
    }

    forbidLeader = () => {
        this.level = -1;
    }

    allowLeader = () => {
        this.level = 0;
    }

    get levelDescription() {
        return leadersLevels[this.level];
    }

    get allow() {
        return this.level === -1;
    }

    changeLevel = (level: number) => {
        console.log(level);
        this.level = level;
    }
}

export default LeaderStore;
