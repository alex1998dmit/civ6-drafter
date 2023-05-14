import { leaders } from "../data/leaders";
import LeaderStore from "./Leader";
import { makeAutoObservable, runInAction } from "mobx";

class LeadersStore {
    leaders = [];
    rootStore;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.leaders = leaders.map((leader) => new LeaderStore(leader));
        makeAutoObservable(this, { rootStore: false })

    }

    getLeader = (leaderId) => {
        return this.leaders.find((leader) => leader.id === leaderId);
    }

    setSelected = (leader) => {
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
