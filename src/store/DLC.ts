import { makeAutoObservable } from "mobx";
import { DLCModel } from "../types/dls";

class DLCStore {
    id: number;
    name: string;
    allow: boolean;

    constructor(dlc: DLCModel) {
        this.id = dlc.id;
        this.name = dlc.name;
        this.allow = true;
        makeAutoObservable(this);
    }
}

export default DLCStore;
