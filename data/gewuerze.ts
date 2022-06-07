import {Gewürzmischung} from './gewürzmischung';
import {Zutat} from './zutat';

export const gewuerze: Gewürzmischung[] = [
  new Gewürzmischung('afrikanisch', [
    '1TL Thymian',
    '1TL Paprika',
    '1TL Pfeffer',
    '1TL Sumach',
    'etwas Muskat',
    'Salz',
  ]),
  new Gewürzmischung('ungarisch', [
    '1TL Majoran',
    '1TL Thymian',
    '2TL geräuchertes Paprikapulver',
    '1TL Sumach',
    'Salz',
    'Muskat',
  ]),
  new Gewürzmischung('indisch', [
    '2TL Tandoori Masala',
    '2TL Garam Masala',
    '1TL Madras Currypulver',
    '1TL Kreuzkümmel',
  ]),
  new Gewürzmischung('mexikanisch', [
    '1TL Kreuzkümmel',
    '1TL Paprikapulver',
    '1/2TL Korianderpulver',
    '1TL Pfeffer',
    'etwas Chilipulver',
  ]),
  new Gewürzmischung('italienisch', [
    '1TL Basilikum',
    '1TL Oregano',
    '1TL Thymian',
    '1/2TL Rosmarin',
    '1TL Pfeffer',
  ]),
];
