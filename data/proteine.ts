import {types} from '@babel/core';
import {Zubereitungsart, Zubereitungstyp} from './zubereitungsart';
import {Zutat} from './zutat';

const fleischVorbereiten =
  'Das Fleisch jeweils in ca 2 cm breite Streifen schneiden.';

const fleischBraten = new Zubereitungsart(
  Zubereitungstyp.Braten,
  fleischVorbereiten +
    'Das Fleisch in eine heiße Pfanne mit Öl geben und für etwa 6 Minuten von allen Seiten braun braten.',
);

const linsenVorbereiten =
  'Die Linsen waschen und dabei mehrmals das Wasser wechseln, bis das Wasser nicht mehr trüb wird.';
const linsenKochen = new Zubereitungsart(
  Zubereitungstyp.Kochen,
  linsenVorbereiten +
    ' Die Linsen 15 Minuten in kochendem Wasser garen. Alternativ können die Linsen auch in der Sauce mitgekocht werden. Das dauert länger bis die Linsen weich sind.',
);

const tofuVorbereiten =
  'Den Tofu mit einem schweren Buch oder einer Presse auspressen.';

const tofuBraten = new Zubereitungsart(
  Zubereitungstyp.Braten,
  tofuVorbereiten +
    'Den Tofu in Streifen schneiden und für ca. 10 Minuten von allen Seiten knusprig braten',
);
const tofuBacken = new Zubereitungsart(
  Zubereitungstyp.Braten,
  tofuVorbereiten +
    'In einer Schale etwas Öl, Salz, Pfeffer und Kräuter verquirlen. Den Tofu in Würfel schneiden und mit der Marinade vermischen. Die Tofuwürfel auf einem Backblech verteilen und für 30 Minuten bei 200° im Ofen backen.',
);

const tofuPanieren = new Zubereitungsart(
  Zubereitungstyp.Panieren,
  tofuVorbereiten +
    'Den Tofu in Scheiben schneiden. In einer Schüssel Stärke mit etwas Salz vermischen. Die Tofu Scheiben hinlegen und von allen Seiten mit der Stärke bedecken. Anschließend den panierten Tofu in einer heißen Pfanne mit Öl ca. 10 Minuten von allen Seiten knusprig braten.',
);

const vegan = true;
const nichtVegan = false;

export const proteinquelle: Zutat[] = [
  new Zutat('rote Linsen', [linsenKochen], 200, vegan),
  new Zutat('Tofu', [tofuBacken, tofuBraten, tofuPanieren], 400, vegan),
  new Zutat('Schweinefleisch', [fleischBraten], 250, nichtVegan),
  // new Zutat('Hünchen', [fleischBraten], 250),
  // new Zutat('Rind', [fleischBraten], 250),
  // new Zutat('Erbsen', ['braten', 'kochen', 'stampfen'], 250),
];
