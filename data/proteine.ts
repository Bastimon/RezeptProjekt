import {Zutat} from './zutat';

const fleischBraten =
  'Das Fleisch jeweils in ca 2 cm breite Streifen schneiden. Das Fleisch in eine heiße Pfanne mit Öl geben und für etwa 6 Minuten von allen Seiten braun braten.';
const linsenVorbereiten =
  'Die Linsen waschen und dabei mehrmals das Wasser wechseln, bis das Wasser nicht mehr trüb wird.';
const tofuVorbereiten =
  'Den Tofu mit einem schweren Buch oder einer Presse auspressen. Den Tofu in Streifen schneiden und für ca. 10 Minuten von allen Seiten knusprig braten';

export const proteinquelle: Zutat[] = [
  new Zutat('rote Linsen', [linsenVorbereiten], 200),
  new Zutat('Tofu', [tofuVorbereiten], 400),
  new Zutat('Schweinefleisch', [fleischBraten], 250),
  new Zutat('Hünchen', [fleischBraten], 250),
  new Zutat('Rind', [fleischBraten], 250),
  // new Zutat('Erbsen', ['braten', 'kochen', 'stampfen'], 250),
];
