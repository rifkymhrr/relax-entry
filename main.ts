// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from 'node:fs';

const paragraphs = [
  'The quilt comes down over the bed, still warm from the line. For a moment it holds a little hill of air above your legs. The cotton smells faintly of the garden.',
  'First the edges touch the sheet. Then the middle lowers, finding your ankles and the hollow beside one knee. The pale squares settle at different heights. Cotton brushes cotton.',
  'One fold stays rounded a little longer. It sinks, pauses, sinks again, until the hem rests against your wrist.',
  'Your feet make two low mounds at the far end. Between them, a seam lies in a shallow valley. The cotton is warm there too.',
];

const text = paragraphs.join('\n\n');
if (Array.from(text).length > 1000 || !text.trim()) {
  throw new Error('Entry must contain 1 to 1000 Unicode code points.');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
