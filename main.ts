// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from 'node:fs';

const scenes = [
  'You sit at the kitchen table. A loaf is cooling on a wooden board, its crust making small, dry clicks beneath a linen cloth. There is a chair for your feet and a square of afternoon light on the floor. The room smells faintly of flour. Between one little sound and the next, the garden is quiet.',
  'On the covered porch, a cotton shirt hangs from the back of a chair. Someone has mended its cuff with pale blue thread. A breeze turns the sleeve a little, showing the neat stitches, then lets it hang. Beyond the steps, the bean leaves move together and come apart. A bee works slowly along the low white flowers.',
  'Back at the table, the bread has almost finished its small sounds. The cloth holds a little warmth. You rest your hands beside it while the light reaches the edge of the board. Another soft click, farther from the last. One corner of the cloth rises in the air from the doorway, then settles against the curve of the loaf.',
];

const text = scenes.join('\n\n');
if (Array.from(text).length > 1000 || !text.trim()) {
  throw new Error('Entry must contain 1 to 1000 Unicode code points.');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
