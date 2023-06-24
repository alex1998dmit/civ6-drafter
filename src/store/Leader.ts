import { makeAutoObservable } from "mobx";
import { leadersLevels } from "../data/leader_levels";
import { LeaderModel } from "../types/leaders";
import { RootStore } from "./Root";

class LeaderStore {
    id: number;
    name: string;
    avatar: string;
    level: number;
    info: string;
    civId: number;
    rootStore: RootStore;

    constructor(leader: LeaderModel, rootStore: RootStore) {
        this.id = leader.id;
        this.name = leader.name;
        this.avatar = leader.avatar;
        this.level = leader.level;
        this.info = leader.info;
        this.civId = leader.civId;
        this.rootStore = rootStore;
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
        return this.level !== -1;
    }

    get civ() {
        return this.rootStore.civsStore.getByCivId(this.civId)
    }

    changeLevel = (level: number) => {
        this.level = level;
    }
}

export default LeaderStore;
