import { makeAutoObservable } from "mobx";

class DLCStore {
    constructor(dlc) {
        this.id = dlc.id;
        this.name = dlc.name;
        this.allow = true;
        makeAutoObservable(this);
    }
}

export default DLCStore;
