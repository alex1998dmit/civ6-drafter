import { makeAutoObservable } from "mobx";
import { civs } from "../data/civs";
import CivStore from "./Civ";
import _ from "lodash";

class CivsStore {
  filteredCivs = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.civs = civs.map((civ) => new CivStore(civ, rootStore));
    this.filteredCivs = this.civs;
    makeAutoObservable(this, { rootStore: false });
  }

  removeFilteredCiv = (civ) => {
    const id = civ.id;
    this.filteredCivs = this.filteredCivs.filter((civ) => civ.id !== id);
  }

  getRandomly = (n) => {
    const res = _.sampleSize(this.civs, n);
    res.forEach(c => this.removeFilteredCiv(c));
    return res;
  }

  getRandomlyLeaderFromCiv = (civ) => {
    const leaders = _.sampleSize(civ, 1);
  }
}

export default CivsStore;
