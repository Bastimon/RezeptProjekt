export class Zutat {
  name: string;
  zubereitungsarten: string[];
  menge: number;

  constructor(name: string, zubereitungsarten: string[], menge: number) {
    this.name = name;
    this.zubereitungsarten = zubereitungsarten;
    this.menge = menge;
  }
}
