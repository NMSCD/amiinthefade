import { GalacticCoordinate } from '@nmscd/coordinate-conversion';
import { maxCoordLength } from '@/variables/constants';

// check if glyphs / coords / region match
export function isFadeSpace(input: string): boolean {
  const isMaxCoordLength = input.length === maxCoordLength;

  // oxlint-disable-next-line new-cap
  const glyphs = isMaxCoordLength ? GalacticCoordinate({ code: input }).toGlyph().value.code : input;

  // return false if validation fails
  if (!glyphs) return false;

  const validFadeGlyphs = {
    x: ['801', '7FF'],
    z: ['801', '7FF'],
    y: ['81', '7F'],
  };

  const isFadeX = validFadeGlyphs.x.includes(glyphs.slice(-3));
  const isFadeZ = validFadeGlyphs.z.includes(glyphs.slice(-6, -3));
  const isFadeY = validFadeGlyphs.y.includes(glyphs.slice(4, 6));

  const isFade = isFadeX || isFadeY || isFadeZ;

  return isFade;
}
