import { makeAutoObservable } from "mobx";
import { civs } from "../data/civs";
import CivStore from "./Civ";

class CivsStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.civs = civs.map((civ) => new CivStore(civ, rootStore));
    makeAutoObservable(this, { rootStore: false });
  }
}

export default CivsStore;
