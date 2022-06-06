import { Zutat } from './zutat';

const types = ['gebraten', 'gebacken']
const anbratenText = "Das Gemüse in die Pfanne geben und ca. 5 Minuten mitbraten"
const dünstenText = "Gemüse putzen und in Streifen schneiden und ca. 5 Minuten mitbraten"
const backenText = "Gemüse putzen und in Streifen schneiden und ca. 5 Minuten mitbraten"

const anbratenSuffix = 'Anschließend in die Pfanne geben und für 5 Minuten mitbraten.';
const backenSuffix = ''

const brokkoliVorbereitung = "Den Brokkoli putzen und anschließend in Rösschen schneiden. Den Strunk schälen und klein schneiden."
const paprikaVorbereitung = "Die Paprika putzen und entkernen. Anschließend Paprika in feine Streifen schneiden."
const pilzeVorbereitung = "Die Pilze putzen. Anschließend die Pilze in Scheiben schneiden."
const zucchiniVorbereitung = "Die Zucchini putzen und in Scheiben oder Würfel schneiden."
const kürbisVorbereitung = "Den Kürbis putzen und halbieren. Mit einem Löffel die Kerne und Fasern herausslösen. Den Rest des Kürbis in mundgerechte Würfel schneiden."
const kürbisBacken = "Die Stücke auf einem Backblech verteilen. 1EL Öl, 1/2 TL Salz, 1/2TL Pfeffer, 1/2 TL Curry Pulver vermischen und die Kürbisstücke damit bepinseln. Den Kürbis bei 200° Grad für 30 Minuten im Ofen rösten."
const spinatVorbereitung = "Den Spinat waschen und mit einem Tuch oder einer Salatschleuder vom Wasser befreien."
const aubergineVorbereitung = "Die Aubergine putzen und in etwa 1cm große Scheiben schneiden."

export const gemuese: Zutat[] = [
  new Zutat('Paprika', [paprikaVorbereitung + anbratenSuffix], 400),
  new Zutat('Zucchini', [zucchiniVorbereitung + anbratenSuffix], 500),
  new Zutat('Brokkoli', [brokkoliVorbereitung + 'Alles in reichlich kochendem Salzwasser etwa 5 Minuten bissfest garen'], 400),
  new Zutat('Pilze', [pilzeVorbereitung + anbratenSuffix], 500),
  new Zutat('Kürbis', [kürbisVorbereitung + kürbisBacken], 500),
  new Zutat('Spinat', [spinatVorbereitung + "Spinat in die Pfanne geben und solange braten, bis er eingefallen ist."], 400),
  new Zutat('Aubergine', [aubergineVorbereitung + "Anschließend die Aubergine für ca. 10 Minuten anbraten."], 400),
];
