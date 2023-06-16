import { leaders } from "../data/leaders";
import LeaderStore from "./Leader";
import { makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "./Root";

class LeadersStore {
    leaders: Array<LeaderStore> = [];
    rootStore: RootStore;
    selected: LeaderStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.leaders = leaders.map((leader) => new LeaderStore(leader));
        makeAutoObservable(this, { rootStore: false })

    }

    getLeader = (leaderId: number) => {
        return this.leaders.find((leader) => leader.id === leaderId);
    }

    setSelected = (leader: LeaderStore) => {
        this.selected = leader;
    }

    get availableLeaders() {
        return this.leaders.filter((leader) => leader.allow);
    }

    get blockedLeaders() {
        return this.leaders.filter((leader) => !leader.allow);
    }

    get SRankedLeaders() {
        return this.availableLeaders.filter((leader) => leader.level === 0);
    }

    get ARankedLeaders() {
        return this.availableLeaders.filter((leader) => leader.level === 1);
    }

    get BRankedLeaders() {
        return this.availableLeaders.filter((leader) => leader.level === 2);
    }

    get CRankedLeaders() {
        return this.availableLeaders.filter((leader) => leader.level === 3);
    }
}

export default LeadersStore;
