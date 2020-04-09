import { action, observable } from "mobx";

interface IChartInput {
  year: number;
  [key: string]: number;
}

class PrefectureStore {

  @observable
  resourcesPerYear: IChartInput[] = [];

  @observable
  selectedPrefectureCode: number[] = [1];

  @action
  addPrefectures = (input: IChartInput) => {
    const insertIndex = this.resourcesPerYear.findIndex(resource => resource.year === input.year);
    const indexNotFound = insertIndex === -1;
    if(indexNotFound) {
      this.resourcesPerYear = this.resourcesPerYear.concat([input]);
    } else {
      // 配列を丸ごと入れ替えないと再レンダリングされない
      this.resourcesPerYear[insertIndex] = input;
      this.resourcesPerYear = [].concat(this.resourcesPerYear);
    }
  }

  @action
  deletePrefectures = (deletePrefKey: string) => {
    this.resourcesPerYear.forEach(resource => {
      delete resource[deletePrefKey];
    })
    // 配列を丸ごと入れ替えないと再レンダリングされない
    this.resourcesPerYear = [].concat(this.resourcesPerYear);
  }

  @action
  setTargetPrefectureCode = (prefCode: number) => {
    if(prefCode < 1 || prefCode > 47) {
      console.log("invalid prefecture code");
      return;
    }
    this.selectedPrefectureCode.push(prefCode);
  }
}

export const prefectureStore = new PrefectureStore();
export type prefectureStoreType = typeof prefectureStore;