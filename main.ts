// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from 'node:fs';

const paragraphs = [
  'You sit in the low armchair while your hair is brushed. A towel, warm from the radiator, lies around your shoulders. Its folded edge is soft beneath your ear. The seat gives a little under your weight; your hands lie loose in your lap. A familiar hand gathers your hair, and the brush draws slowly through it, making a faint, dry sound.',
  'The hand holds each length loosely while the bristles pass. At the ends, the last strands slip through by themselves and fall softly onto the towel. The brush lifts, comes back to the crown, begins again. A long stroke, a small pause, then warm fingers resting at your nape. The towel keeps its warmth.',
  'The strokes grow lighter. A thumb smooths the fine hair beside your ear, then the brush follows once more, all the way down. Your head leans into the waiting palm. For a while the hand simply rests there, curved beneath the weight. On the table, the blue handle of the brush is worn pale in the middle. The thumb makes one smaller circle, then is still.',
];

const text = paragraphs.join('\n\n');
if (Array.from(text).length > 1000 || !text.trim()) {
  throw new Error('Entry must contain 1 to 1000 Unicode code points.');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
