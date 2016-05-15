import * as shapes from './shapes';

export interface Theme {
  shapes: any;
  items: Array<Item>;
}

interface Item {
  icon: string;
  music: string;
  x: number;
  y: number;
  active: boolean;
}

export const blackbird: Theme = {
  shapes: [
    {url: shapes.cross, icon: 'cross'},
    {url: shapes.formless, icon: 'formless'},
    {url: shapes.bird, icon: 'bird'},
    {url: shapes.star, icon: 'star'},
    {url: shapes.cloud, icon: 'cloud'},
    {url: shapes.flower, icon: 'flower'},
    {url: shapes.hat, icon: 'hat'},
    {url: shapes.heart, icon: 'heart'}
  ],
  items: [
    {icon: 'closebird', music: 'blackbird/closebird.mp3', x: 264.5, y: 15.5, active: true},
    {icon: 'cuckoo', music: 'blackbird/cuckoo.mp3', x: 442.5, y: 88.5, active: true},
    {icon: 'crickets', music: 'blackbird/crickets.mp3', x: 514.5, y: 265.5, active: true},
    {icon: 'forest', music: 'blackbird/forest.mp3', x: 441.5, y: 442.5, active: true},
    {icon: 'rain', music: 'blackbird/rain.mp3', x: 264.5, y: 515.5, active: true},
    {icon: 'thunder', music: 'blackbird/thunder.mp3', x: 88.5, y: 442.5, active: true},
    {icon: 'train', music: 'blackbird/train.mp3', x: 14.5, y: 265.5, active: true},
    {icon: 'waterfall', music: 'blackbird/waterfall.mp3', x: 87.5, y: 88.5, active: true}
  ]
};

export const starWars: Theme = {
  shapes: [
    {url: shapes.millenniumFalcon, icon: 'millennium-falcon'},
    {url: shapes.cross, icon: 'cross'},
    {url: shapes.formless, icon: 'formless'},
    {url: shapes.crossLight, icon: 'cross-light'},
    {url: shapes.hat, icon: 'hat'},
    {url: shapes.heartStone, icon: 'heart-stone'},
    {url: shapes.star, icon: 'star'},
  ],
  items: [
    {icon: 'darth-vader', music: 'star-wars/darth-vader.mp3', x: 264.5, y: 15.5, active: true},
    {icon: 'stormtrooper', music: 'star-wars/march.mp3', x: 442.5, y: 88.5, active: true},
    {icon: 'c-3po', music: 'star-wars/lightsaber.mp3', x: 514.5, y: 265.5, active: true},
    {icon: 'bb-8', music: 'star-wars/bb-8.mp3', x: 441.5, y: 442.5, active: true},
    {icon: 'battle-droid', music: 'star-wars/laser.mp3', x: 264.5, y: 515.5, active: true},
    {icon: 'millennium-falcon', music: 'star-wars/chewbacca.mp3', x: 88.5, y: 442.5, active: true},
    {icon: 'death-star', music: 'star-wars/imperial.mp3', x: 14.5, y: 265.5, active: true},
    {icon: 'r2-d2', music: 'star-wars/r2-d2.mp3', x: 87.5, y: 88.5, active: true}
  ]
};

export const oneDay: Theme = {
  shapes: [
    {url: shapes.hat, icon: 'hat'},
    {url: shapes.cloud, icon: 'cloud'},
    {url: shapes.cross, icon: 'cross'},
    {url: shapes.flower, icon: 'flower'},
    {url: shapes.formless, icon: 'formless'},
    {url: shapes.heart, icon: 'heart'},
    {url: shapes.mustache, icon: 'mustache'},
    {url: shapes.stormCloud, icon: 'storm-cloud'}
  ],
  items: [
    {icon: 'moon', music: 'one-day/crickets.mp3', x: 264.5, y: 15.5, active: true},
    {icon: 'cock', music: 'one-day/cock.mp3', x: 442.5, y: 88.5, active: true},
    {icon: 'coffee', music: 'one-day/coffee.mp3', x: 514.5, y: 265.5, active: true},
    {icon: 'traffic', music: 'one-day/traffic.mp3', x: 441.5, y: 442.5, active: true},
    {icon: 'dining', music: 'one-day/dining.mp3', x: 264.5, y: 515.5, active: true},
    {icon: 'office', music: 'one-day/office.mp3', x: 88.5, y: 442.5, active: true},
    {icon: 'playground', music: 'one-day/playground.mp3', x: 14.5, y: 265.5, active: true},
    {icon: 'snore', music: 'one-day/snore.mp3', x: 87.5, y: 88.5, active: true}
  ]
};

export const THEMES = {blackbird, starWars, oneDay};
