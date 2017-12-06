import { Injectable } from '@angular/core';

@Injectable()
export class GoldService {
  private totalGold = {count: 0};
  private activites = [];
  private addGoldToTotal(min: number, max: number): number {
    let range = max - min + 1;
    let gold = Math.floor(Math.random() * range) + min;
    this.totalGold.count += gold;
    return gold;
  }
  generateGoldFrom(buldingName: string, min: number, max: number) {
    let gold = this.addGoldToTotal(min, max);
    this.activites.unshift({gold: gold, building: buldingName});
  }

  getTotalGold() {
    return this.totalGold;
  }

  getActivities() {
    return this.activites;
  }

  constructor() { }

}
