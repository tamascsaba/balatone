import {millenniumFalcon, formless} from './shapes';


export interface Theme {
  shapes: Array<string>;
  items: Array<Item>;
}

interface Item {
  icon: string;
  music: string;
  x: number;
  y: number;
}

export const blackbird: Theme = {
  shapes: [
    formless
  ],
  items: [
    {icon: 'stormtrooper', music: '', x: 264.5, y: 15.5},
    {icon: 'c-3po', music: '', x: 514.5, y: 265.5},
    {icon: 'darth-vader', music: '', x: 442.5, y: 88.5},
    {icon: 'r2-d2', music: '', x: 441.5, y: 442.5},
    {icon: 'battle-droid', music: '', x: 264.5, y: 515.5},
    {icon: 'millennium-falcon', music: '', x: 88.5, y: 442.5},
    {icon: 'death-star', music: '', x: 14.5, y: 265.5},
    {icon: 'bb-8', music: '', x: 87.5, y: 88.5}
  ]
};

export const starWars: Theme = {
  shapes: [
    formless,
    millenniumFalcon
  ],
  items: [
    {icon: 'darth-vader', music: 'star-wars/darth-vader.mp3', x: 264.5, y: 15.5},
    {icon: 'stormtrooper', music: 'star-wars/imperial.mp3', x: 442.5, y: 88.5},
    {icon: 'c-3po', music: 'star-wars/lightsaber.mp3', x: 514.5, y: 265.5},
    {icon: 'bb-8', music: 'star-wars/bb-8.mp3', x: 441.5, y: 442.5},
    {icon: 'battle-droid', music: 'star-wars/laser.mp3', x: 264.5, y: 515.5},
    {icon: 'millennium-falcon', music: 'star-wars/chewbacca.mp3', x: 88.5, y: 442.5},
    {icon: 'death-star', music: 'star-wars/march.mp3', x: 14.5, y: 265.5},
    {icon: 'r2-d2', music: 'star-wars/r2-d2.mp3', x: 87.5, y: 88.5}
  ]
};

export const oneDay: Theme = {
  shapes: [
    formless
  ],
  items: [
    {icon: 'sw1', music: '', x: 264.5, y: 15.5},
    {icon: 'sw2', music: '', x: 264.5, y: 15.5},
    {icon: 'sw3', music: '', x: 264.5, y: 15.5},
    {icon: 'sw4', music: '', x: 264.5, y: 15.5},
    {icon: 'sw5', music: '', x: 264.5, y: 15.5},
    {icon: 'sw6', music: '', x: 264.5, y: 15.5},
    {icon: 'sw7', music: '', x: 264.5, y: 15.5},
    {icon: 'sw8', music: '', x: 264.5, y: 15.5}
  ]
};

export const THEMES = {blackbird, starWars, oneDay};
