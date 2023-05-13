import { makeAutoObservable, runInAction } from "mobx";

class LeaderStore {
    constructor(leader) {
        this.name = leader.name;
        this.avatar = leader.avatar;
        this.level = leader.level;
        this.allow = leader.allow;
        this.info = leader.info;
        makeAutoObservable(this, { rootStore: false })
    }
}

export default LeaderStore;
