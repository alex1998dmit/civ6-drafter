import { makeAutoObservable, runInAction } from "mobx";
import { leadersLevels } from "../data/leader_levels";

class LeaderStore {
    constructor(leader) {
        this.id = leader.id;
        this.name = leader.name;
        this.avatar = leader.avatar;
        this.level = leader.level;
        this.allow = leader.allow;
        this.info = leader.info;
        makeAutoObservable(this, { rootStore: false })
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

    changeLevel = (level) => {
        console.log(level);
        this.level = level;
    }
}

export default LeaderStore;
