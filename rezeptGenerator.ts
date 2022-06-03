import {gemuese} from './data/gemuese';
import {gewuerze} from './data/gewuerze';
import {kohlenhydrate} from './data/kohlenhydrate';
import {proteinquelle} from './data/proteine';
import {sauce} from './data/sauce';
import {Zutat} from './data/zutat';
export class RezeptGenerator {
  private generateProteinText(): string {
    let randProtein = this.getRandom(proteinquelle);
    let text = '';
    text =
      proteinquelle[randProtein].name +
      ' ' +
      this.getTextbaustein(proteinquelle[randProtein]);
    return text;
  }

  private generateHydrateText(): string {
    let randHydrate = this.getRandom(kohlenhydrate);
    let text = '';
    text =
      kohlenhydrate[randHydrate].name +
      ' ' +
      this.getTextbaustein(kohlenhydrate[randHydrate]);
    return text;
  }

  private generateGemueseText(): string {
    let randGemuese = this.getRandom(gemuese);
    let text = '';
    text =
      gemuese[randGemuese].name +
      ' ' +
      this.getTextbaustein(gemuese[randGemuese]);
    return text;
  }

  private generateGewuerzeText(): string {
    let randGewuerze = this.getRandom(gewuerze);
    let text = '';
    text =
      gewuerze[randGewuerze].name +
      ' ' +
      this.getTextbaustein(gewuerze[randGewuerze]);
    return text;
  }

  private generateSauceText(): string {
    let randSauce = this.getRandom(sauce);
    let text = '';
    text = sauce[randSauce].name + ' ' + this.getTextbaustein(sauce[randSauce]);
    return text;
  }

  private getRandom(zutaten: Zutat[]) {
    return Math.floor(Math.random() * zutaten.length);
  }

  private getTextbaustein(zutat: Zutat): String {
    let rand = Math.floor(Math.random() * zutat.zubereitungsarten.length);
    return zutat.zubereitungsarten[rand];
  }

  public generateRezept(): string {
    let tempText =
      this.generateProteinText() +
      this.generateHydrateText() +
      this.generateGemueseText() +
      this.generateGewuerzeText() +
      this.generateSauceText();

    return tempText;
  }
}
