import CivsStore from "./Civs";
import DLCsStore from "./DLCs";
import LeadersStore from "./Leaders";
import RandomizerStore from "./Randomizer";

class RootStore {
    leadersStore: LeadersStore;
    randomizerStore: RandomizerStore;
    civsStore: CivsStore;
    dlcsStore: DLCsStore;

    constructor() {
        this.leadersStore = new LeadersStore(this);
        this.randomizerStore = new RandomizerStore(this);
        this.civsStore = new CivsStore(this);
        this.dlcsStore = new DLCsStore(this);
    }
}

export { RootStore };
