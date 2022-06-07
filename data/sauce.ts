export class Sauce {
  name: string;
  zutaten: string[];
  zubereitung: string;
  mitGewürzen: boolean;

  constructor(
    name: string,
    zutaten: string[],
    zubereitung: string,
    mitGewürzen: boolean,
  ) {
    (this.name = name),
      (this.zutaten = zutaten),
      (this.zubereitung = zubereitung),
      (this.mitGewürzen = mitGewürzen);
  }
}
