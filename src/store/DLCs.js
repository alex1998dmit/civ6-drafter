import { makeAutoObservable } from "mobx";
import { dls } from "../data/dls";
import DLCStore from "./DLC";

class DLCsStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.dlcs = dls.map(dlc => new DLCStore(dlc));
        makeAutoObservable(this, { rootStore: false });
    }
}

export default DLCsStore;
