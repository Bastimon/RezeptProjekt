import {Zubereitungsart} from './zubereitungsart';

export class Zutat {
  name: string;
  zubereitungsarten: Zubereitungsart[];
  menge: number;
  vegan: boolean;
  constructor(
    name: string,
    zubereitungsarten: Zubereitungsart[],
    menge: number,
    vegan: boolean,
  ) {
    this.name = name;
    this.zubereitungsarten = zubereitungsarten;
    this.menge = menge;
    this.vegan = vegan;
  }
}
