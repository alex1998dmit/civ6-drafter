import { leaders } from "../data/leaders";
import LeaderStore from "./Leader";
import { makeAutoObservable } from "mobx";
import { RootStore } from "./Root";
import _ from "lodash";
import { GroupedLeadersByCiv } from "../types/leaders";

class LeadersStore {
    leaders: Array<LeaderStore> = [];
    rootStore: RootStore;
    selected: LeaderStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.leaders = leaders.map((leader) => new LeaderStore(leader, rootStore));
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

    get availableAndUniqLeaders() {
        return this.uniqRandomCivLeaders.filter((leader) => leader.allow);
    }

    get blockedLeaders() {
        return this.leaders.filter((leader) => !leader.allow);
    }

    get groupedByCivLeaders() {
        const leaders: GroupedLeadersByCiv = {};
        this.leaders.forEach((leader) => {
            const civId = leader.civId;
            leaders[civId] = !leaders[civId] ?
                [leader] :
                [...leaders[civId], leader]
        })
        return leaders;
    }

    get uniqRandomCivLeaders() {
        const leaders: Array<LeaderStore> = [];
        _.forOwn(this.groupedByCivLeaders, (civs: Array<LeaderStore>, civId) => {
            if (civs.length === 1) {
                leaders.push(civs[0]);
            } else {
                const randomLeader: LeaderStore = _.sample(civs);
                leaders.push(randomLeader);
            }
        })
        return leaders;
    }

    get SRankedUniqLeaders() {
        return this.availableAndUniqLeaders.filter((leader) => leader.level === 0);
    }

    get ARankedUniqLeaders() {
        return this.availableAndUniqLeaders.filter((leader) => leader.level === 1);
    }

    get BRankedUniqLeaders() {
        return this.availableAndUniqLeaders.filter((leader) => leader.level === 2);
    }

    get CRankedUniqLeaders() {
        return this.availableAndUniqLeaders.filter((leader) => leader.level === 3);
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
