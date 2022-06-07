import {Zubereitungsart, Zubereitungstyp} from './zubereitungsart';
import {Zutat} from './zutat';

const kartoffelnVorbereiten = 'Kartoffeln schälen, die großen halbieren.';
const kartoffelnKochen = new Zubereitungsart(
  Zubereitungstyp.Kochen,
  kartoffelnVorbereiten +
    'In einen großen Topf mit gesalzenem Wasser geben. Das Wasser bei mittlerer bis hoher Hitze zum Kochen bringen und für ca. 20 - 30 Minuten kochen. Wenn sie sich leicht mit einem Messer anstechen lassen, sind sie fertig.',
);
const kartoffelnStampfen = new Zubereitungsart(
  Zubereitungstyp.Kochen,
  kartoffelnVorbereiten +
    'In einen großen Topf mit gesalzenem Wasser geben. Das Wasser bei mittlerer bis hoher Hitze zum Kochen bringen und für ca. 20 - 30 Minuten kochen. Wenn sie sich leicht mit einem Messer anstechen lassen, sind sie fertig.',
);

const nudelnText = new Zubereitungsart(
  Zubereitungstyp.Kochen,
  'Die Nudeln in reichlich kochendem Salzwasser nach Packungsangabe kochen.',
);

const reisVorbereitung =
  'Den Reis in einer Schüssel mit Wasser waschen, bis das Wasser nicht mehr trüb ist. ';
const reisKochen = new Zubereitungsart(
  Zubereitungstyp.Kochen,
  reisVorbereitung +
    'Den Reis in der 2fachen Menge Wasser und 1TL Salz in einem Topf 15-20 Minuten bei geschlossenen Deckel köcheln lassen, bis die Reiskörner die gesamte Flüssigkeit in sich aufgesogen haben.',
);

const bulgurVorbereitung =
  'Bulgur waschen und dabei mehrmals das Wasser wechseln, bis das Wasser nicht mehr trüb wird.';

const bulgurKochen = new Zubereitungsart(
  Zubereitungstyp.Kochen,
  bulgurVorbereitung +
    'Den Bulgur in der 2-fachen Menge Wasser und etwas Salz in einen Topf geben. Den Topf auf den Herd stellen und das Wasser zum Kochen bringen. Sobald das Wasser kocht, die Hitze reduzieren und den Bulgur für ca. 20 Minuten mit geschlossenem Deckel köcheln lassen.',
);
const vegan = true;

export const kohlenhydrate: Zutat[] = [
  new Zutat('Kartoffeln', [kartoffelnKochen], 400, vegan),
  new Zutat('Reis', [reisKochen], 250, vegan),
  new Zutat('Nudeln', [nudelnText], 300, vegan),
  new Zutat('Bulgur', [bulgurKochen], 300, vegan),
];
