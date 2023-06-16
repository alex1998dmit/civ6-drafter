import _ from "lodash";
import { makeAutoObservable, runInAction } from "mobx";
import { RandomizerLeadersNumber } from "../types/randomizer";
import { RootStore } from "./Root";
import DLCStore from "./DLC";

class RandomizerStore {
    playersAmount = 4;
    leadersNumber: RandomizerLeadersNumber = {
        0: 1,
        1: 3,
        2: 2,
        3: 1
    }
    draftResults: any = [];
    dlcs: Array<DLCStore> = [];
    rootStore: RootStore;


    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this, { rootStore: false })
    }

    updateLeadersNumber = (rang: number, number: number) => {
        this.leadersNumber[rang] = number;
    }

    udpatePlayersAmount = (amount: number) => {
        this.playersAmount = amount;
    }

    randomize = () => {
        const SRankLeaders = _.sampleSize(this.rootStore.leadersStore.SRankedLeaders, this.leadersNumber[0] * this.playersAmount);
        const ARankLeaders = _.sampleSize(this.rootStore.leadersStore.ARankedLeaders, this.leadersNumber[1] * this.playersAmount);
        const BRankLeaders = _.sampleSize(this.rootStore.leadersStore.BRankedLeaders, this.leadersNumber[2] * this.playersAmount);
        const CRankLeaders = _.sampleSize(this.rootStore.leadersStore.CRankedLeaders, this.leadersNumber[3] * this.playersAmount);
        
        const res = Array(this.playersAmount).fill(1).map((el, index) => {
            const start = index * this.playersAmount;
            const end = index * this.playersAmount + this.playersAmount;
            return [
                ...SRankLeaders.slice(index * this.leadersNumber[0], index * this.leadersNumber[0] + this.leadersNumber[0]),
                ...ARankLeaders.slice(index * this.leadersNumber[1], index * this.leadersNumber[1] + this.leadersNumber[1]),
                ...BRankLeaders.slice(index * this.leadersNumber[2], index * this.leadersNumber[2] + this.leadersNumber[2]),
                ...CRankLeaders.slice(index * this.leadersNumber[3], index * this.leadersNumber[3] + this.leadersNumber[3])
            ];
        })
        this.draftResults = res;
    }
}

export default RandomizerStore;
