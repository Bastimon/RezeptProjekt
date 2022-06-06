import { Zutat } from './zutat';

const kartoffelnKochen = "Kartoffeln schälen, die großen halbieren. In einen großen Topf mit gesalzenem Wasser geben. Das Wasser bei mittlerer bis hoher Hitze zum Kochen bringen und für ca. 20 - 30 Minuten kochen. Wenn sie sich leicht mit einem Messer anstechen lassen, sind sie fertig."
const nudelnText = "Die Nudeln in reichlich kochendem Salzwasser nach Packungsangabe kochen."
const reisVorbereitung = "Den Reis in einer Schüssel mit Wasser waschen, bis das Wasser nicht mehr trüb ist. "
const bulgurVorbereitung = "Bulgur waschen und dabei mehrmals das Wasser wechseln, bis das Wasser nicht mehr trüb wird."

export const kohlenhydrate: Zutat[] = [
  new Zutat('Kartoffeln', [kartoffelnKochen], 400),
  new Zutat('Reis', [reisVorbereitung + 'Den Reis in der 2fachen Menge Wasser und 1TL Salz in einem Topf 15-20 Minuten bei geschlossenen Deckel köcheln lassen, bis die Reiskörner die gesamte Flüssigkeit in sich aufgesogen haben.'], 250),
  new Zutat('Nudeln', [nudelnText], 300),
  new Zutat('Bulgur', [bulgurVorbereitung + "Den Bulgur in der 2-fachen Menge Wasser und etwas Salz in einen Topf geben. Den Topf auf den Herd stellen und das Wasser zum Kochen bringen. Sobald das Wasser kocht, die Hitze reduzieren und den Bulgur für ca. 20 Minuten mit geschlossenem Deckel köcheln lassen."], 300),

];
