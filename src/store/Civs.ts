import { makeAutoObservable } from "mobx";
import { civs } from "../data/civs";
import CivStore from "./Civ";
import _ from "lodash";
import { RootStore } from "./Root";

class CivsStore {
  filteredCivs: Array<CivStore> = [];
  rootStore: RootStore;
  civs: Array<CivStore>;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.civs = civs.map((civ) => new CivStore(civ, rootStore));
    this.filteredCivs = this.civs;
    makeAutoObservable(this, { rootStore: false });
  }

  removeFilteredCiv = (civ: CivStore) => {
    const id = civ.id;
    this.filteredCivs = this.filteredCivs.filter((civ) => civ.id !== id);
  }

  getRandomly = (n: number) => {
    const res = _.sampleSize(this.civs, n);
    res.forEach((c: CivStore) => this.removeFilteredCiv(c));
    return res;
  }

  getRandomlyLeaderFromCiv = (civ: CivStore) => {
    const leaders = _.sampleSize(civ, 1);
  }
}

export default CivsStore;
