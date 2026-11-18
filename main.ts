// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from 'node:fs';

const scenes = [
  'You sit at the kitchen table, your feet on the smooth rung of the chair. A loaf cools on a wooden board beneath a linen cloth. Now and then its crust makes a small, dry click. The room smells of toasted flour. Afternoon light lies across the floorboards, reaching as far as the leg of the table.',
  'Through the open door, a cotton shirt hangs over a chair on the porch. Its cuff has been mended with pale blue thread. A little air fills the sleeve, then leaves it in its old fold. Beyond the steps, the bean leaves turn, showing their paler sides. A patch of sun rests on the mended cuff, bringing out each small stitch.',
  'Back at the table, the sounds from the bread come farther apart. The board is warm beneath your palms. A small click, after a longer pause, then only the leaves outside. Light rests along the edge of the cloth. The linen lies over the loaf, rounded at the top, loose along the sides.',
];

const text = scenes.join('\n\n');
if (Array.from(text).length > 1000 || !text.trim()) {
  throw new Error('Entry must contain 1 to 1000 Unicode code points.');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
