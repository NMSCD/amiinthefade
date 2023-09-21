import { globalElements } from "./elementStore";
import { showGlyphs } from "./glyphLogic";
import { isFadeSpace, setOutput } from "./main";

export function submit(): void {
	const input = (globalElements.input!.portalglyphsInput as HTMLInputElement).value.trim();

	const isFade = isFadeSpace(input);
	const message = `You are ${isFade ? '' : 'not'} in the Fade!`;

	setOutput(input ? message : '', isFade);
}

// clears value of an input
export function reset(): void {
	(globalElements.input!.portalglyphsInput as HTMLInputElement).value = '';
	showGlyphs();
	submit();
}