import {millenniumFalcon, formless, cross, crossLight, hat, cloud} from './shapes';


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
    cross
  ],
  items: [
    {icon: 'closebird', music: 'blackbird/closebird.mp3', x: 264.5, y: 15.5},
    {icon: 'crickets', music: 'blackbird/crickets.mp3', x: 514.5, y: 265.5},
    {icon: 'cuckoo', music: 'blackbird/cuckoo.mp3', x: 442.5, y: 88.5},
    {icon: 'forest', music: 'blackbird/forest.mp3', x: 441.5, y: 442.5},
    {icon: 'rain', music: 'blackbird/rain.mp3', x: 264.5, y: 515.5},
    {icon: 'thunder', music: 'blackbird/thunder.mp3', x: 88.5, y: 442.5},
    {icon: 'train', music: 'blackbird/train.mp3', x: 14.5, y: 265.5},
    {icon: 'waterfall', music: 'blackbird/waterfall.mp3', x: 87.5, y: 88.5}
  ]
};

export const starWars: Theme = {
  shapes: [
    crossLight
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

export const THEMES = {blackbird, starWars, oneDay};
