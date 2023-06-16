import { makeAutoObservable } from "mobx";
import { dls } from "../data/dls";
import DLCStore from "./DLC";
import { RootStore } from "./Root";

class DLCsStore {
    rootStore: RootStore;
    dlcs: Array<DLCStore>;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.dlcs = dls.map(dlc => new DLCStore(dlc));
        makeAutoObservable(this, { rootStore: false });
    }
}

export default DLCsStore;
