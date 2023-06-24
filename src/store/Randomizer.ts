import _ from "lodash";
import { makeAutoObservable } from "mobx";
import { RandomizerLeadersNumber } from "../types/randomizer";
import { RootStore } from "./Root";
import DLCStore from "./DLC";
import LeaderStore from "./Leader";

class RandomizerStore {
    playersAmount = 4;
    leadersNumber: RandomizerLeadersNumber = {
        0: 1,
        1: 3,
        2: 2,
        3: 1
    }
    allLeadersNumber: number = 4;
    draftResults: Array<Array<LeaderStore>> = [];
    dlcs: Array<DLCStore> = [];
    rootStore: RootStore;
    isAllowDuplicateCivs = false;
    withTearOfLeaders = true;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this, { rootStore: false })
    }

    updateAllLeadersNumber = (num: number) => {
        this.allLeadersNumber = num;
    }

    updateLeadersNumber = (rang: number, number: number) => {
        this.leadersNumber[rang] = number;
    }

    udpatePlayersAmount = (amount: number) => {
        this.playersAmount = amount;
    }

    toogleAllowDublicateCivs = () => {
        this.isAllowDuplicateCivs = !this.isAllowDuplicateCivs;
    }

    toogleWithTearOfLeaders = () => {
        this.withTearOfLeaders = !this.withTearOfLeaders;
    }

    get allLeaders() {
        return this.isAllowDuplicateCivs ? 
            this.rootStore.leadersStore.availableLeaders :
            this.rootStore.leadersStore.availableAndUniqLeaders;
    }

    get SRankedLeaders() {
        return this.isAllowDuplicateCivs ? 
            this.rootStore.leadersStore.SRankedLeaders :
            this.rootStore.leadersStore.SRankedUniqLeaders;
    }

    get ARankedLeaders() {
        return this.isAllowDuplicateCivs ? 
            this.rootStore.leadersStore.ARankedLeaders :
            this.rootStore.leadersStore.ARankedUniqLeaders;
    }

    get BRankedLeaders() {
        return this.isAllowDuplicateCivs ? 
            this.rootStore.leadersStore.BRankedLeaders :
            this.rootStore.leadersStore.BRankedUniqLeaders;
    }

    get CRankedLeaders() {
        return this.isAllowDuplicateCivs ? 
            this.rootStore.leadersStore.CRankedLeaders :
            this.rootStore.leadersStore.CRankedUniqLeaders;
    }

    randomizeWithTears = () => {
        const SRankLeaders = _.sampleSize(this.SRankedLeaders, this.leadersNumber[0] * this.playersAmount);
        const ARankLeaders = _.sampleSize(this.ARankedLeaders, this.leadersNumber[1] * this.playersAmount);
        const BRankLeaders = _.sampleSize(this.BRankedLeaders, this.leadersNumber[2] * this.playersAmount);
        const CRankLeaders = _.sampleSize(this.CRankedLeaders, this.leadersNumber[3] * this.playersAmount);
        
        const res = Array(this.playersAmount).fill(1).map((el, index) => {
            return [
                ...SRankLeaders.slice(index * this.leadersNumber[0], index * this.leadersNumber[0] + this.leadersNumber[0]),
                ...ARankLeaders.slice(index * this.leadersNumber[1], index * this.leadersNumber[1] + this.leadersNumber[1]),
                ...BRankLeaders.slice(index * this.leadersNumber[2], index * this.leadersNumber[2] + this.leadersNumber[2]),
                ...CRankLeaders.slice(index * this.leadersNumber[3], index * this.leadersNumber[3] + this.leadersNumber[3])
            ];
        })
        return res;
    }

    randomizeWithAllLeaders = () => {
        const leaders = _.sampleSize(this.allLeaders, this.allLeadersNumber * this.playersAmount)
        const res = Array(this.playersAmount).fill(1).map((el, index) => {
            return [...leaders.slice(index * this.allLeadersNumber, index * this.allLeadersNumber + this.allLeadersNumber)]
        })
        return res;
    }

    randomize = () => {
        if (this.withTearOfLeaders) {
            this.draftResults = this.randomizeWithTears();
        } else {
            this.draftResults = this.randomizeWithAllLeaders();
        }
    }
}

export default RandomizerStore;
