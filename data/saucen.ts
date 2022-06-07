import {Sauce} from './sauce';

export const saucen: Sauce[] = [
  new Sauce(
    'Tomatensauce',
    ['700g passierte Tomaten'],
    'Die passierte Tomaten zusammen mit den Gewürzen zum Rest geben und aufkochen lassen',
    true,
  ),
  new Sauce(
    'Sahnesauce',
    ['250g Sahne'],
    'Die Sahne zusammen mit den Gewürzen zu dem Rest geben und aufkochen lassen',
    true,
  ),
  new Sauce(
    'Asiasauce',
    [
      '2EL Sojasauce',
      '2EL geröstetes Sesamöl',
      '2EL Sriacha Sauce',
      '1EL Reisessig',
      '2EL Wasser',
      '1TL Stärke',
    ],
    'Die Zutaten für die Sauce in einer Schale verquirlen bis die Stärke keine Klumpen mehr bildet. Die Flüssigkeit in die Pfanne geben und aufkochen lassen',
    false,
  ),
];
