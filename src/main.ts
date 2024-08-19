import '@picocss/pico';
import './styles.css';
// the order of the CSS imports is IMPORTANT, DO NOT change it!!!
import './elementFunctions';
import { globalElements } from './elementStore';
import { coords2Glyphs } from './coordConversion';

// check if glyphs / coords / region match
export function isFadeSpace(input: string): boolean {
  const convertedGlyphs = coords2Glyphs(input);

  const validFadeGlyphs = {
    x: ['801', '7FF'],
    z: ['801', '7FF'],
    y: ['81', '7F'],
  };

  const isFadeX = validFadeGlyphs.x.includes(convertedGlyphs.slice(-3));
  const isFadeZ = validFadeGlyphs.z.includes(convertedGlyphs.slice(-6, -3));
  const isFadeY = validFadeGlyphs.y.includes(convertedGlyphs.slice(4, 6));

  const isFade = isFadeX || isFadeY || isFadeZ;

  return isFade;
}

export function setOutput(output: string, success: boolean) {
  const outputElement = globalElements.output!.output as HTMLOutputElement;

  const addClass = getClass(success);
  const removeClass = getClass(!success);

  outputElement.classList.add(addClass);
  outputElement.classList.remove(removeClass);

  outputElement.innerText = output;

  function getClass(success: boolean) {
    return success ? 'has-background-success-dark' : 'has-background-danger-dark';
  }
}
