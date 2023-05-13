import _ from "lodash";
import { makeAutoObservable, runInAction } from "mobx";

class RandomizerStore {
    firstTeamLeaders = {
        S: [],
        A: [],
        B: [],
        C: []
    }
    secondTeamLeaders = {
        S: [],
        A: [],
        B: [],
        C: []
    }
    leadersNumber = {
        S: 1,
        A: 3,
        B: 2,
        C: 1
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.SRanked = [];
        makeAutoObservable(this, { rootStore: false })
    }

    updateLeadersNumber = (rang, number) => {
        this.leadersNumber[number] = rang;
    }

    randomize = () => {
        const SRankLeaders = _.sampleSize(this.rootStore.leadersStore.SRankedLeaders, this.leadersNumber.S * 2);
        const ARankLeaders = _.sampleSize(this.rootStore.leadersStore.ARankedLeaders, this.leadersNumber.A * 2);
        const BRankLeaders = _.sampleSize(this.rootStore.leadersStore.BRankedLeaders, this.leadersNumber.B * 2);
        const CRankLeaders = _.sampleSize(this.rootStore.leadersStore.CRankedLeaders, this.leadersNumber.C * 2);
        console.log(SRankLeaders);

        this.SRanked = SRankLeaders;
        this.firstTeamLeaders = {
            S: SRankLeaders.slice(0, 2),
            A: ARankLeaders.slice(0, 2),
            B: BRankLeaders.slice(0, 2),
            C: CRankLeaders.slice(0, 2),
        }

        this.secondTeamLeaders = {
            S: SRankLeaders.slice(2, 4),
            A: ARankLeaders.slice(2, 4),
            B: BRankLeaders.slice(2, 4),
            C: CRankLeaders.slice(2, 4),
        }
    }
}

export default RandomizerStore;
