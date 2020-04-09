import { prefectureStore, prefectureStoreType } from "../store/prefecture.store"
import * as api from "./api";

export const prefKeyFormat = (prefCode: number) => `pref-${prefCode}`;

export class ResourceManager {
  store: prefectureStoreType;

  constructor() {
    this.store = prefectureStore;
  }

  async add(prefCode: number) {
    if(this.isAlreadyFetch(prefCode)) return;
    const populations = await api.getTotalPopulations(prefCode);
    populations.forEach(population => {
      const newPrefKey = prefKeyFormat(prefCode);
      const oldResource = this.store.resourcesPerYear.find(resource => resource.year === population.year);
      const newResources = oldResource
        ? Object.assign(oldResource, {[newPrefKey]: population.value})
        : {year: population.year, [newPrefKey]: population.value};
      this.store.addPrefectures(newResources);
    }) 
  }

  remove(prefCode: number) {
    if(!this.isAlreadyFetch(prefCode)) return;
    const deleteKey = prefKeyFormat(prefCode);
    this.store.deletePrefectures(deleteKey);
  }

  isAlreadyFetch(prefCode: number) {
    const key = prefKeyFormat(prefCode);
    if(this.store.resourcesPerYear.length < 1 ) {
      return false;
    } else if(this.store.resourcesPerYear[0].hasOwnProperty(key)) {
      return true;
    }
    return false;
  }
}