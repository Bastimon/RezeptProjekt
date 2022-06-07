import {Zubereitungsart} from './zubereitungsart';
import {Zutat} from './zutat';

export class Protein extends Zutat {
  zusatzGewürze: string[];
  constructor(
    name: string,
    zubereitungsarten: Zubereitungsart[],
    menge: number,
    vegan: boolean,
    zusatzGewürze: string[] = [],
  ) {
    super(name, zubereitungsarten, menge, vegan);
    this.zusatzGewürze = zusatzGewürze;
  }
}
