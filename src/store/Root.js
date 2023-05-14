import CivsStore from "./Civs";
import LeadersStore from "./Leaders";
import RandomizerStore from "./Randomizer";

class RootStore {
    constructor() {
        this.leadersStore = new LeadersStore(this);
        this.randomizerStore = new RandomizerStore(this);
        this.civsStore = new CivsStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;
