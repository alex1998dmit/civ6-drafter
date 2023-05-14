import { makeAutoObservable } from "mobx";
import _ from "lodash";

class CivStore {
  constructor(civ, rootStore) {
    this.id = civ.id;
    this.name = civ.name;
    this.avatar = civ.avatar;
    this.leaders = rootStore.leadersStore.leaders.filter((leader) => {
      return civ.leaders.includes(Number(leader.id));
    })
    makeAutoObservable(this);
  }
}

export default CivStore;
