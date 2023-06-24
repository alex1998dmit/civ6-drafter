import { makeAutoObservable } from "mobx";
import LeaderStore from "./Leader";
import { CivModel } from "../types/civs";
import { RootStore } from "./Root";

class CivStore {
  id: number;
  name: string;
  avatar: string;
  leaders: Array<LeaderStore>

  constructor(civ: CivModel, rootStore: RootStore) {
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
