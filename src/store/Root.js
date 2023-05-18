import CivsStore from "./Civs";
import DLCsStore from "./DLCs";
import LeadersStore from "./Leaders";
import RandomizerStore from "./Randomizer";

class RootStore {
    constructor() {
        this.leadersStore = new LeadersStore(this);
        this.randomizerStore = new RandomizerStore(this);
        this.civsStore = new CivsStore(this);
        this.dlcsStore = new DLCsStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;